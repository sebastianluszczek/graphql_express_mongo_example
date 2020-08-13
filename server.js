const app = require("./src/app");
const dbConnect = require("./src/utils/dbConnect");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const startServer = async () => {
  await dbConnect();
  app.listen(PORT, () => {
    console.log(`Server started on ${HOST}:${PORT}...`);
  });
};

startServer();
