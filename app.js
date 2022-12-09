// create an express app
const express = require("express")
const bodyParser = require('body-parser');
const app = express()
let MongoClient = require('mongodb').MongoClient;

// use the express-static middleware
app.use(express.static("src"))
app.use(bodyParser.json())
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration

let secrets;
let url;
// if (!process.env.URL) {
// secrets = require('secrets.json');
// url = secrets.URL;
// } else {
// 	url = process.env.URL;
// }
url = process.env.MONGDO_URL;
console.log(url)
url = "mongodb+srv://rhoMember:2bSh5JdVsCuW3TSK@rhobase.faewymn.mongodb.net/test"

// create
app.post("/requestTutor", function (req, res) {
  console.log(req.body,"body")
  const submitObj = req.body;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("open_source_learning");
    dbo.collection("tutees").insertOne(submitObj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
  res.sendStatus(201)
  });
});
// read
app.get("/getTutee", function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("open_source_learning");
    let query = searchObj
    dbo.collection("tutees").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result)
      db.close();
    });
  });
});

app.delete("/deleteTutee", function (req, res) {
  // body: {Name:xxx , Email:xxx}
  console.log(req.body,"body")
  const deleteObj = req.body;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("open_source_learning");
    var myquery = deleteObj
    dbo.collection("tutees").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      res.send("Deleted")
      db.close();
    });
  });
});


// update
app.post("/updateTutee", function (req, res) {
  // Need to save current profile and update
  // body: {Name:xxx , Email:xxx}
  console.log(req.body,"body")
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("open_source_learning");
    let myquery = { Name: req.body.Name };
    let newvalues = { $set: {Email: req.body.Email, Course: req.body.Course, Grade: req.body.Grade, Description: req.body.Description} };
    dbo.collection("tutees").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
});


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

