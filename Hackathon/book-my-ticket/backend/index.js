import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("server is working fine");
});

app.listen(port, () => {
  console.log("Server is running ");
});
