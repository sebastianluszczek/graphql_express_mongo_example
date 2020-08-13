const { GraphQLList, GraphQLID } = require("graphql");
const {
  getOneProject,
  getAllProjects,
} = require("../resolvers/project.resolvers");

const ProjectType = require("../types/project.type");

exports.project = {
  type: ProjectType,
  description: "Single project",
  args: {
    _id: { type: GraphQLID },
  },
  resolve: getOneProject,
};

exports.projects = {
  type: GraphQLList(ProjectType),
  description: "List of projects",
  resolve: getAllProjects,
};
