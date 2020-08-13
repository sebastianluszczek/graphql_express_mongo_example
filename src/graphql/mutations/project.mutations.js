const { GraphQLString, GraphQLNonNull } = require("graphql");
const { addProject } = require("../resolvers/project.resolvers");

const ProjectType = require("../types/project.type");

exports.addProject = {
  type: ProjectType,
  description: "Add Project",
  args: {
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: addProject,
};
