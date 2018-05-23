import { graphqlExpress } from "graphql-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { schema } from "./schema";
import { resolvers } from "./resolvers";

export const apiEndpoint = graphqlExpress({
  schema: makeExecutableSchema({typeDefs: schema, resolvers})
});
