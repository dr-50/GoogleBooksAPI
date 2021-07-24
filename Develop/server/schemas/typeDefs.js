const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        bookId: Int
        authors: String
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
    
        addUser(email: String!, email: String!, password: String!):Auth    
    }
    `;
module.exports= typeDefs