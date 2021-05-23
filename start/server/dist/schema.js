"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Rocket {\n    id: ID!\n    name: String\n    type: String\n  }\n\n  type User {\n    id: ID!\n    email: String!\n    trips: [Launch]!\n    token: String\n  }\n\n  type Mission {\n    name: String\n    missionPatch(size: Patchsize): String\n  }\n\n  type Launch {\n    id: ID!\n    site: String\n    mission: Mission\n    rocket: Rocket\n    isBooked: Boolean!\n  }\n\n  enum Patchsize {\n    SMALL\n    LARGE\n  }\n\n  type Query {\n    launches: [Launch]!\n    launch(id: ID!): Launch\n    me: User\n  }\n\n  type TripUpdateResponse {\n    success: Boolean!\n    message: String\n    launches: [Launch]\n  }\n\n  type Mutation {\n    bookTrips(launchIds: [ID]!): TripUpdateResponse!\n    cancelTrip(launchId: ID!): TripUpdateResponse!\n    login(email: String): User\n  }\n"], ["\n  type Rocket {\n    id: ID!\n    name: String\n    type: String\n  }\n\n  type User {\n    id: ID!\n    email: String!\n    trips: [Launch]!\n    token: String\n  }\n\n  type Mission {\n    name: String\n    missionPatch(size: Patchsize): String\n  }\n\n  type Launch {\n    id: ID!\n    site: String\n    mission: Mission\n    rocket: Rocket\n    isBooked: Boolean!\n  }\n\n  enum Patchsize {\n    SMALL\n    LARGE\n  }\n\n  type Query {\n    launches: [Launch]!\n    launch(id: ID!): Launch\n    me: User\n  }\n\n  type TripUpdateResponse {\n    success: Boolean!\n    message: String\n    launches: [Launch]\n  }\n\n  type Mutation {\n    bookTrips(launchIds: [ID]!): TripUpdateResponse!\n    cancelTrip(launchId: ID!): TripUpdateResponse!\n    login(email: String): User\n  }\n"])));
var templateObject_1;
