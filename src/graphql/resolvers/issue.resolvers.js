const db = require("../../models");
const Issue = db.issues;

exports.getOneIssue = async (parent, args) => {
  try {
    const _id = args._id ? args._id : parent._id;
    const response = await Issue.findById(_id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

exports.getAllIssues = async () => {
  try {
    const response = await Issue.find();
    return response;
  } catch (error) {
    console.log(error);
  }
};

exports.getAllProjectIssues = async project => {
  try {
    const response = await Issue.find({ project_id: project._id });
    return response;
  } catch (error) {
    console.log(error);
  }
};

exports.addIssue = async (parent, args) => {
  const newIssue = new Issue({
    title: args.title,
    description: args.description,
    project_id: args.project_id,
  });
  const response = await newIssue.save();
  return response;
};
