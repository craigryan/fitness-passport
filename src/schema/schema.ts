import { gql } from "apollo-server";

export const typeDefs = gql`
  type Member {
    email: String!
    firstName: String!
    lastName: String!
  }

  type Query {
    member(email: String!): Member
  }
`;
