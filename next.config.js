/* eslint-disable @typescript-eslint/no-var-requires */
const rehypePrism = require(`@mapbox/rehype-prism`);
const remarkEmoji = require(`remark-emoji`);
const remarkFootnotes = require(`remark-footnotes`);
const remarkTypograf = require(`@mavrin/remark-typograf`);
const remarkSubSuper = require(`remark-sub-super`);
const remarkHtml = require(`remark-html`);
const remarkGuillemets = require(`remark-fix-guillemets`);
const remarkUnwrapImages = require(`remark-unwrap-images`);
const withSourceMaps = require(`@zeit/next-source-maps`);
const withOffline = require(`next-offline`);

// Sentry
const SentryWebpackPlugin = require(`@sentry/webpack-plugin`);
const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_AUTH_TOKEN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  NODE_ENV,
  VERCEL_GITHUB_COMMIT_SHA,
} = process.env;

const COMMIT_SHA = VERCEL_GITHUB_COMMIT_SHA;

process.env.SENTRY_DSN = SENTRY_DSN;
const basePath = ``;

// MDX
const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [
      remarkEmoji,
      remarkFootnotes,
      remarkTypograf,
      remarkSubSuper,
      remarkHtml,
      remarkGuillemets,
      remarkUnwrapImages,
    ],
  },
});

const withBundleAnalyzer = require(`@next/bundle-analyzer`)({
  enabled: process.env.ANALYZE === `true`,
});

// Config
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  pageExtensions: [`js`, `jsx`, `mdx`, `ts`, `tsx`],
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  webpack: (config, options) => {
    // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
    // @sentry/node will run in a Node.js environment. @sentry/node will use
    // Node.js-only APIs to catch even more unhandled exceptions.
    //
    // This works well when Next.js is SSRing your page on a server with
    // Node.js, but it is not what we want when your client-side bundle is being
    // executed by a browser.
    //
    // Luckily, Next.js will call this webpack function twice, once for the
    // server and once for the client. Read more:
    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    //
    // So ask Webpack to replace @sentry/node imports with @sentry/browser when
    // building the browser's bundle
    if (!options.isServer) {
      config.resolve.alias[`@sentry/node`] = `@sentry/browser`;
    }

    // Fixes npm packages that depend on `fs` module
    //if (!options.isServer) {
    //  config.resolve.fallback.fs = false;
    //}

    // When all the Sentry configuration env variables are available/configured
    // The Sentry webpack plugin gets pushed to the webpack plugins to build
    // and upload the source maps to sentry.
    // This is an alternative to manually uploading the source maps
    // Note: This is disabled in development mode.
    if (
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN &&
      COMMIT_SHA &&
      NODE_ENV === `production`
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: `.next`,
          ignore: [`node_modules`],
          stripPrefix: [`webpack://_N_E/`],
          urlPrefix: `~${basePath}/_next`,
          release: COMMIT_SHA,
        })
      );
    }
    return config;
  },
  workboxOpts: {
    swDest: `../public/service-worker.js`,
    offlineGoogleAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:gif|ico|jpg|jpeg|png|svg|webp)(?:\?|$)/,
        handler: `CacheFirst`,
        options: {
          cacheName: `image-cache`,
          expiration: {
            maxEntries: 500,
            maxAgeSeconds: 60 * 60 * 24 * 7,
          },
        },
      },
      {
        urlPattern: /api/,
        handler: `NetworkFirst`,
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': `true`,
            },
          },
        },
      },
    ],
  },
  images: {
    loader: `cloudinary`,
    path: `https://res.cloudinary.com/christopherleemiller/image/upload/`,
    domains: [
      `clm-sites-strapi.s3.us-east-2.amazonaws.com`,
      `res.cloudinary.com`,
    ],
  },
  basePath,
};

module.exports = withBundleAnalyzer(
  withSourceMaps(withOffline(withMDX(nextConfig)))
);
