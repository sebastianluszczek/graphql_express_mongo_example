const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();

const schema = require("./graphql/schema");

app.use(
  "/v1/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
