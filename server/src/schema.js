// A schema is like a contract between the server and the client. 
// It defines what a GraphQL API can and can't do, and how clients can request or change data.

const { gql } = require('apollo-server')

// '!' means that it cant be empty 

const typeDefs = gql`
  # Schema definitions go here

  type Query {
    random_joke: Joke
    categories: [String]
    jokes(category: String!): Joke
  }
  type Joke {
    categories: [String]
    created_at: String! 
    id: ID!
    updated_at: String!
    url: String
    icon_url: String
    value: String!
  }
`

module.exports = typeDefs
