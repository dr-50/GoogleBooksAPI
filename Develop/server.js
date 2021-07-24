const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./server/schemas')
const db = require('./server/config/connection');


const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const server = new ApolloServer({
  typeDefs,
  resolvers
})


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  });
});
