require('dotenv').config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require('./resolvers');
const NasaImageAPI = require('./dataSource')

const server = new ApolloServer({ 
  cors: true,
  typeDefs,
  resolvers,
  dataSources: () => ({
    nasaImageAPI: new NasaImageAPI()
  }),
});

server.listen().then(() => {
  console.log(`
    Server is running on port 4000`);
});