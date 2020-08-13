const { GraphQLObjectType } = require("graphql");

const { addIssue } = require("./issue.mutations");
const { addProject } = require("./project.mutations");

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addProject,
    addIssue,
  }),
});

module.exports = RootMutation;
