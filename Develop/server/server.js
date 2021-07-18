const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`Use GraphQL at http://localhost:${PORT}${Server.graphqlPath}`)
  });
});
