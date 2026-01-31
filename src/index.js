import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRoutes.js";
import connectDB from "./config/dbConfig.js";

// Create a new express app/server object
const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use("/api", apiRouter); //if the req url starts with /api, use the apiRouter


app.get("/ping", (req, res) => {
  return res.json({
    message: "pong",
  });
}); // what to do if someone makes a GET request to /ping


app.use("/", (req, res) => {
  return res.json({
    message: "home route",
  });
  //res.render("home", { name: "john doe" });
});


app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  connectDB();
});
