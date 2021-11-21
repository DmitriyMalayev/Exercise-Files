import express from "express";
import favicon from "serve-favicon";
import path from "path";
import data from "./data/data.json";

const app = express();
const PORT = 3000;

//This is for the public folder on path "/"
app.use(express.static("public"));
// method to use JSON.
// Allows us to use JSON in our data on our server
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//This is for the images folder on path "/images"
app.use("./images", express.static("images"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req, res) => {
  res.json(data);
});

// {"hello": "This is an example of JSON data"}
// hello=URLEncoded+This+is+an+example+of+URLEncoded+Data

app.post("/newItem", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get(
  "/item/:id",
  (req, res, next) => {
    // This is the middleware that pulls the data
    console.log(req.params.id, "req.params.id");
    let user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    // Middleware that uses the request object.
    // MIddleware are functions that are happening before we are sending a response back.

    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    // EVERYTHING ABOVE THIS LINE IS MIDDLEWARE (JUST BEFORE THE RESPONSE)

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

//Chaining Example

app.get("/item", (req, res) => {
  res.send(`A get request with /item route on port ${PORT}`);
});

// Refactored Chaining

app
  .route("/item")
  .get((req, res) => {
    res.send(`A get request with /item route on port ${PORT}`);
  })
  .put((req, res) => {
    res.send(`A put request with /newItem route on port ${PORT}`);
  })
  .delete((req, res) => {
    res.send(`A delete request with /item route on port ${PORT}`);
  });

// Error Handling
// Express automatically handles errors unless we want to customize it.
// If we want to use Error Handling Middleware it needs to be placed last.
app.route("/item");
get((req, res) => {
  throw new Error();
});

//Error Handling Function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Red Alert! Red Alert: ${err.stack}`);
});

//Place Error Handling Middleware before app.listen
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
  console.log(data);
});

/*
index.js is the entry point of our project

How to load static files inside of our server

express.static
  Provides ability to add static files to our server
express.json
  Allows us to parse JSON POST comamnds. 
  When a form or the front end wants to send new data to our server and DB, and send it in JSON format, 
  we need our server to be able to use it in this format and then post it to the database.
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
middleware
  In the context of node express server
  Functions that have access to the request and response object in our Express Application and can run their code there

How to debug?
  DEBUG=express:* node index.js 
  
*/
