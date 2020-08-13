const { GraphQLObjectType } = require("graphql");
const { issue, issues } = require("./issue.queries");
const { project, projects } = require("./project.queries");

const RootQuery = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    issue,
    issues,
    project,
    projects,
  }),
});

module.exports = RootQuery;
