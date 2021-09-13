const { gql } = require("apollo-server-express");
const typeDefs = gql`
input HouseInput{
    title: String!
    price: Float!
    description: String!
    images: [String!]
    address: String!
    info: InfoInput
}
input InfoInput{
    persons: Int
    baths: Float
    pets: Boolean
    offstreet: Boolean
    other: String
}
  type House {
      id: ID!
    title: String!
    price: Float!
    description: String!
    images: [String!]
    address: String!
  }
  type Lister {
    id: ID!
    username: String!
    password: String!
    status: String!
  }
  type Renter {
    id: ID!
    username: String!
    password: String!
    status: String!
  }
  type Review {
    title: String
    review: String!
    star: Int
  }
  type Info {
    persons: Int
    baths: Float
    pets: Boolean
    offstreet: Boolean
    other: String
  }
  type ListerAuth {
    user: Lister
    token: ID!
  }
  type RenterAuth {
    user: Renter
    token: ID!
  }
  type Query {
    me(username: String!, password: String): Lister
  }
  type Mutation {
    listerLogin(email: String!, password: String!): ListerAuth
    renterLogin(email: String!, password: String!): RenterAuth
    listerCreate(
      username: String!
      email: String!
      password: String!
    ): ListerAuth
    listerCreateHouse(
      house: HouseInput!
    ): House
    renterCreate(
      username: String!
      email: String!
      password: String!
    ): RenterAuth
  }
`;

module.exports = typeDefs;
