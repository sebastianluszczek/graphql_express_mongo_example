const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const { getIssueProject } = require("../resolvers/project.resolvers");

const IssueType = new GraphQLObjectType({
  name: "Issue",
  description: "Representation of issue",
  fields: () => ({
    _id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
    project_id: { type: GraphQLNonNull(GraphQLString) },
    project: {
      type: ProjectType,
      resolve: getIssueProject,
    },
  }),
});

module.exports = IssueType;

const ProjectType = require("./project.type");
