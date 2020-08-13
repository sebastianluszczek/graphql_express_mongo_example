const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const { getAllProjectIssues } = require("../resolvers/issue.resolvers");

const ProjectType = new GraphQLObjectType({
  name: "Project",
  description: "Representation of project",
  fields: () => ({
    _id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    issues: {
      type: GraphQLList(IssueType),
      resolve: getAllProjectIssues,
    },
  }),
});

module.exports = ProjectType;

const IssueType = require("./issue.type");
