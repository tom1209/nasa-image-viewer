import { gql } from '@apollo/client';

export const IMAGE_QUERY = gql`
query GetImages($q: String!, $from: String!) {
  images(q: $q, from: $from) {
    images {
      id
      href
      description
      title
    }
    total
  }
}
`;
