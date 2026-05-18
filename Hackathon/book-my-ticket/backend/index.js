import express from "express";
import "dotenv/config";
import app from "./src/app.js";

const port = process.env.port;


app.listen(port, () => {
  console.log("Server is running ");
});
