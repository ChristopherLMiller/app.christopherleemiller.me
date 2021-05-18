import Axios from 'axios';
import Router from 'next/router';
import { GraphQLClient } from 'graphql-request';
import { getSession } from 'next-auth/client';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

// All of this is the old way till you reach the bottom of the document
// This should be considered depricated at this point
// TODO: Remove this
/*const fetch = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  headers: {
    Accept: `application/json`,
    'Content-Type': `application/json`,
  },
});

fetch.interceptors.response.use(
  (response) => response,
  function (error) {
    if (error.response.status === 401) {
      Router.push(`/login`);
    } else {
      return Promise.reject(error);
    }
  }
);

export default fetch;*/

// New way to query data
export const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
);

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const session = await getSession();
    const requestHeaders = {
      authorization: `Bearer ${session?.jwt}`,
    };
    return await graphQLClient.request(
      query,
      variables,
      session ? requestHeaders : null
    );
  };
}

export interface iSEO {
  title: string;
  slug: string;
  description: string;
  featured_image: {
    url: string;
    width: number;
    height: number;
    alternativeText: string;
  };
}

export async function getServerSideSEO(
  url: string,
  context: GetServerSidePropsContext<ParsedUrlQuery>
  // eslint-disable-next-line @typescript-eslint/ban-types
): Promise<Array<object>> {
  const session = await getSession(context);
  const requestHeaders = new Headers({
    Authorization: `Bearer ${session?.jwt}`,
  });

  const res = await fetch(url, {
    headers: session ? requestHeaders : null,
  });

  return await res.json();
}
