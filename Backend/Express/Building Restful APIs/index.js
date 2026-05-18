import app from "./src/config/app.js";
import "dotenv/config";
import connectDB from "./src/config/db.js";

const PORT = process.env.port;

app.get("/", (req, res) => {
  res.send("This is Hello world!");
});

const start = async function () {
  // connect to database
  await connectDB();
  app.listen(PORT, () => console.log("Server running."));
};
start().catch((err) => {
  console.log(`Failed to start the server. \n${err}`);
  process.exit(1);
});
