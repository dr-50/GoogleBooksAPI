const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const {authMiddleware}=require('./utils/auth')
const db = require('./config/connection');
const path = require('path')


const app = express();
const PORT = process.env.PORT || 3001;


let server = null;
async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  })
  await server.start();
  server.applyMiddleware({ app })
}
startServer();


app.use(express.static(path.join(__dirname, '../client/build')))


app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

db.once('open', ()=>{
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  })
})