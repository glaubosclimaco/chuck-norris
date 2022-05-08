// To create our server, we'll use the apollo-server package
// we'll only need the named export ApolloServer
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')

// create an instance of the ApolloServer class and pass it our typeDefs in its options object
const server = new ApolloServer({ typeDefs })


// starting the server
server.listen().then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
    `)
})
