const { GraphQLString, GraphQLNonNull, GraphQLID } = require("graphql");
const { addIssue } = require("../resolvers/issue.resolvers");

const IssueType = require("../types/issue.type");

exports.addIssue = {
  type: IssueType,
  description: "Add Issue",
  args: {
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    project_id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: addIssue,
};
