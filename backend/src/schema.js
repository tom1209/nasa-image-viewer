const { gql } = require("apollo-server");

const typeDefs = gql`
  type NasaImage {
    id: ID!
    href: String!
    description: String!
    title: String!
  }

  type ImageResponse {
    images: [NasaImage]!
    total: Int!
  }

  type Query {
    images(q: String!, from: String!): ImageResponse!
  }
`;

module.exports = typeDefs;