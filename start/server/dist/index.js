"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var apollo_server_1 = require("apollo-server");
var schema_1 = require("./schema");
var server = new apollo_server_1.ApolloServer({ typeDefs: schema_1.typeDefs });
server.listen().then(function () {
    console.log("\n    Server is running!\n    Listening on port 4000\n    Explore at https://studio.apollographql.com/dev\n  ");
});
