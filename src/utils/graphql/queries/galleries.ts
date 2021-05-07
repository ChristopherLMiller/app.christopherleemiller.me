import { UseQueryResult, useQuery } from 'react-query';
import { graphQLClient } from 'src/utils/functions/fetch';
import { gql } from 'graphql-request';
import Cookies from 'js-cookie';

export const ALL_GALLERIES_STRING = `
query ALL_GALLERIES {
    galleries {
        id
        createdAt
        updatedAt
        title
        slug
        description
        featured_image {
            url
            width
            height
            alternativeText
            provider_metadata
        }
        status
        nsfw
        gallery_categories {
            id
            title
            slug
        }
        gallery_tags {
            id
            title
            slug
        }
    }
}
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useGalleries(): UseQueryResult<any> {
  let headers = {} as Headers;

  if (Cookies.get(`jwt`)) {
    headers[`authorization`] = `Bearer ${Cookies.get(`jwt`)}`;
  }

  return useQuery(`galleries`, async () => {
    const data = await graphQLClient.request(
      gql`
        ${ALL_GALLERIES_STRING}
      `,
      undefined,
      headers
    );
    return data;
  });
}
