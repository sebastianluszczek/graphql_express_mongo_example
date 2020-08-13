module.exports = mongoose => {
  const Issue = mongoose.model(
    "Issue",
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
      state: {
        type: String,
        enum: ["open", "pending", "closed"],
        default: "open",
      },
      project_id: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
    })
  );
  return Issue;
};
