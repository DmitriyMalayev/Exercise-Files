import express from "express";
import data from "./data/data.json";

const app = express();
const PORT = 3000;

//This is for the public folder on path "/"
app.use(express.static("public"));

//This is for the images folder on path "/images"
app.use("./images", express.static("images"));

app.get("/", (req, res) => {
  res.json(data);
});

app.get(
  "/item/:id",
  (req, res, next) => {
    console.log(req.params.id, "req.params.id");
    let user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    res.send(data[user]); //There can only be one response
    next(); //There can be multiple next() callbacks
  },
  (req, res) => {
    console.log("Did you get the right data");
  }
);

app.post("/newItem", (req, res) => {
  res.send(`A post request with /newItem route on port ${PORT}`);
});

app.put("/send", (req, res) => {
  res.send(`A put request with /item route on port ${PORT}`);
});

app.get("/end", (req, res) => {
  res.end(); //Ends the call
});

app.get("/redirected", (req, res) => {
  res.redirect("http://www.linkedin.com");
});

app.get("/images", (req, res) => {
  res.download("images/rocket.jpg");
});

app.delete("/delete", (req, res) => {
  res.send(`A delete request with /item route on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
  console.log(data);
});

/*
index.js is the entry point of our project

How to load static files inside of our server

express.static
  Provides ability to add static files to our server
app.use
  This is a method in express  
  Allows us to add a specific middleware to a path
.send([body])
  Sends a response
  body can be Buffer, String, Object and an Array. 
next()
  Handles multiple functions or handlers within a single route call.
  Allows to do multiple callbacks 
  Allows us to create our own middleware to do anything we want before or after
  You can only have one response method for a single call.
*/
