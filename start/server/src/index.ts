require('dotenv').config();
import { ApolloServer } from "apollo-server";

import { typeDefs } from './schema';

import LaunchAPI from './datasources/launch';
const UserAPI = require('./datasources/user');

const { createStore } = require('./utils'); 
const resolvers = require('./resolvers.js')

const store = createStore();

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  })
})

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});
