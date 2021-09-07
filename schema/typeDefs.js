const {gql} = require("apollo-server-express")
const typeDefs = gql`
type House{
    title: String!
    price: Float!
    description: String!
    images: [String!]
    address: String!
}
type Lister{
    username: String!
    password: String!
}
type Renter{
    username: String!
    password: String!
}
type Review{
    title: String
    review: String!
    star: Int
}
type Info{
    persons: Int
    baths: Float
    pets: Boolean
    offstreet: Boolean
    other: String
}
type ListerAuth{
    user: Lister
    token: ID!
}
type RenterAuth{
    user: Renter
    token: ID!
}
type Query{
    me(username: String! password: String): Lister
}
type Mutation{
    listerLogin(username: String! password: String!): ListerAuth
    renterLogin(username: String! password: String!): RenterAuth
}


`

module.exports = typeDefs