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



let url = "mongodb+srv://rhoMember:2bSh5JdVsCuW3TSK@rhobase.faewymn.mongodb.net/test";


app.post("/requestTutor", function (req, res) {
  console.log(req.body,"body")
  const submitObj = req.body;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("open_source_learning");
    dbo.collection("tutors").insertOne(submitObj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
  res.sendStatus(201)
  });
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));