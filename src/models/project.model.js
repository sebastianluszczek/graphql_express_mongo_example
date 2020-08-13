module.exports = mongoose => {
  const Project = mongoose.model(
    "Project",
    mongoose.Schema({
      title: {
        type: String,
        min: 5,
        max: 100,
        required: true,
      },
      description: {
        type: String,
        min: 5,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
    })
  );
  return Project;
};
