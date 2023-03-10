const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String!
  email: String!
  password: String!
  savedBooks: [Book]
}

type Book {
  bookId: String!
  authors: [String]
  description: String!
  title: String
  image: String
  link: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  users: [User]
  user(username: String!): User
  userById(_id: ID!): User
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  saveBook(
    authors: [String]!,
    description: String!,
    title: String!,
    bookId: String!,
    image: String,
    link: String,
  ): User
  deleteBook(bookId: String!): User
}
`

module.exports = typeDefs;