const { gql } = require("apollo-server");

const typeDefs = gql`
  type NasaImage {
    id: ID!
    href: String!
    description: String!
    title: String!
  }

  type Query {
    images(q: String!): [NasaImage]!
  }
`;

module.exports = typeDefs;