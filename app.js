// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("src"))
app.use(express.urlencoded({
  extended: false
}))

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


// define the first route
app.get("/hello", function (req, res) {
  console.log("Heree")
  res.send("check ")
})


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log(`Example app listening at http://localhost:${3000}`));

app.post('/requestTutor', (req, res) => { 
  console.log("Hello from requestTutor")
  res.send("Testing From requestTutor")

});
app.post('/src/reqTutor.html/requestTutor', (req, res) => {
  console.log("woeking")
  res.end()
})