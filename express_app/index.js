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

app.post("/newItem", (req, res) => {
  res.send(`A post request with /newItem route on port ${PORT}`);
});

app.put("/item", (req, res) => {
  res.send(`A put request with /item route on port ${PORT}`);
});

app.delete("/item", (req, res) => {
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
*/
