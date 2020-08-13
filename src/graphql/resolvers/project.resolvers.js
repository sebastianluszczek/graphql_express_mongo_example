const db = require("../../models");
const Project = db.projects;

exports.getOneProject = async (parent, args) => {
  try {
    const response = await Project.findById(_id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

exports.getIssueProject = async issue => {
  const response = await Project.findById(issue.project_id);
  return response;
};

exports.getAllProjects = async () => {
  try {
    const response = await Project.find();
    return response;
  } catch (error) {
    console.log(error);
  }
};

exports.addProject = async (parent, args) => {
  const newProject = new Project({
    title: args.title,
    description: args.description,
  });
  const response = await newProject.save();
  return response;
};
