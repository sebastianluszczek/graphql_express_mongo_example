const { GraphQLList, GraphQLID } = require("graphql");
const { getOneIssue, getAllIssues } = require("../resolvers/issue.resolvers");

const IssueType = require("../types/issue.type");

exports.issue = {
  type: IssueType,
  description: "Single issue",
  args: {
    _id: { type: GraphQLID },
  },
  resolve: getOneIssue,
};

exports.issues = {
  type: GraphQLList(IssueType),
  description: "List of issues",
  resolve: getAllIssues,
};
