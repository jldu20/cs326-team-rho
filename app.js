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

    dbo.collection("tutees").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result,"aaa");
      res.send(result)
      db.close();
    });
  });
});
app.get("/accAuth", function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("open_source_learning");
    dbo.collection("login_info").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result,"aaa");
      res.send(result)
      db.close();
    });
  });
});
app.post("/addUser", function (req, res) {
  console.log(req.body,"body")
  const submitObj = req.body;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("open_source_learning");
    dbo.collection("login_info").insertOne(submitObj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
  res.sendStatus(201)
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

app.post('/addVideo', function (req, res){
  const submitObj = req.body;

  console.log("this is body", req.body)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("open_source_learning");
    dbo.collection("videos").insertOne(submitObj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
  res.sendStatus(201)
  });
  }
);
app.get("/getVideo", function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("open_source_learning");

    dbo.collection("videos").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result,"videos");
      res.send(result)
      db.close();
    });
  });
});

app.post('/login', function (req, res){
  const login_info = req.body;
  console.log("this is body", req.body)
    MongoClient.connect(url, function(err, db){
        if (err) throw err;
        let dbo = db.db("open_source_learning");
        if (dbo.collection("login_info").count_documents(login_info)){
          console.log("exist")
        }
        else{
          console.log("DNE")
        }


    })
  }
);

//LOGIN STUFF
// const expressSession = require('express-session');  // for managing session state
// const passport = require('passport');               // handles authentication
// const LocalStrategy = require('passport-local').Strategy; // username/password strategy

// app.use(express.static("src"))

// /// NEW
// const minicrypt = require('./src/minicrypt.js');
// const mc = new minicrypt.MiniCrypt();

// // Session configuration

// const session = {
//     secret : process.env.SECRET || 'SECRET', // set this encryption key in Heroku config (never in GitHub)!
//     resave : false,
//     saveUninitialized: false
// };

// // Passport configuration

// const strategy = new LocalStrategy(
//     async (username, password, done) => {
// 	if (!findUser(username)) {
// 	    // no such user
// 	    await new Promise((r) => setTimeout(r, 2000)); // two second delay
// 	    return done(null, false, { 'message' : 'Wrong username' });
// 	}
// 	if (!validatePassword(username, password)) {
// 	    // invalid password
// 	    // should disable logins after N messages
// 	    // delay return to rate-limit brute-force attacks
// 	    await new Promise((r) => setTimeout(r, 2000)); // two second delay
// 	    return done(null, false, { 'message' : 'Wrong password' });
// 	}
// 	// success!
// 	// should create a user object here, associated with a unique identifier
// 	return done(null, username);
//     });

// // App configuration

// app.use(expressSession(session));
// passport.use(strategy);
// app.use(passport.initialize());
// app.use(passport.session());

// // Convert user object to a unique identifier.
// passport.serializeUser((user, done) => {
//     done(null, user);
// });
// // Convert a unique identifier to a user object.
// passport.deserializeUser((uid, done) => {
//     done(null, uid);
// });

// app.use(express.json()); // allow JSON inputs
// app.use(express.urlencoded({'extended' : true})); // allow URLencoded data

// /////​
// // we use an in-memory "database"; this isn't persistent but is easy

// //// NEW ////

// // We used to use:
// //   let users = { 'emery' : 'compsci326' } // default user

// // Now, instead of storing the above password in plaintext, we store a
// // random salt and the hash of the password concatentated with that
// // salt.

// let users = {}; // name : [salt, hash]

// // Illustration of how salts and hashes look and work
// const exampleSalt = '541818e33fa6e21a35b718bbd94d1c7f';
// const exampleHash = '902f945dc114cdf04bb1b2bbcc2ccdef6e416fdb1dce93ed8f34dc6aac02eefaaaf5d65c657dec6e405efa977a26c8e41ff4eb3f46722fbd88779a25d1a22c5b';
// console.log(mc.check('compsci326', exampleSalt, exampleHash)); // true
// console.log(mc.check('nope', exampleSalt, exampleHash)); // false

// // Returns true iff the user exists.
// function findUser(username) {
//     if (!users[username]) {
// 	return false;
//     } else {
// 	return true;
//     }
// }

// // Returns true iff the password is the one we have stored.
// function validatePassword(name, pwd) {
//     if (!findUser(name)) {
// 	return false;
//     }
//     if (mc.check(pwd, users[name][0], users[name][1])) {
// 	return true;
//     }
//     return false;
// }

// // Add a user to the "database".
// function addUser(name, pwd) {
//     if (findUser(name)) {
// 	return false;
//     }
//     const [salt, hash] = mc.hash(pwd);
//     users[name] = [salt, hash];
//     // Now print the user database
//     console.log(users);
//     return true;
// }

// // Routes

// function checkLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
// 	// If we are authenticated, run the next route.
// 	next();
//     } else {
// 	// Otherwise, redirect to the login page.
// 	res.redirect('/login');
//     }
// }

// app.get('/',
// 	checkLoggedIn,
// 	(req, res) => {
// 	    res.send("hello world");
// 	});

// // Handle post data from the login.html form.
// app.post('/login',
// 	passport.authenticate('local' , {     // use username/password authentication
// 	    'successRedirect' : '/private',   // when we login, go to /private 
// 	    'failureRedirect' : '/login'      // otherwise, back to login
// 	}),
//     function (req, res){
//         const login_info = req.body;
// 		console.log("this is body", req.body)
//         MongoClient.connect(url, function(err, db){
//             if (err) throw err;
//             let dbo = db.db("open_source_learning");
//             dbo.collection("login_info").insertOne(login_info, function(err, res){
//                 if (err) throw err;
//                 console.log("1 login info inserted");
//                 db.close()
//             });
//         res.sendStatus(201)
//         })
//     }
// );


// // Handle the URL /login (just output the login.html file).
// app.get('/login',
// 	(req, res) => res.sendFile('html/login.html',
// 				   { 'root' : __dirname }));

// // Handle logging out (takes us back to the login page).
// app.get('/logout', (req, res) => {
//     req.logout(); // Logs us out!
//     res.redirect('/login'); // back to login
// });


// // Like login, but add a new user and password IFF one doesn't exist already.
// // If we successfully add a new user, go to /login, else, back to /register.
// // Use req.body to access data (as in, req.body['username']).
// // Use res.redirect to change URLs.
// app.post('/register',
// 	 (req, res) => {
// 	     const username = req.body['username'];
// 	     const password = req.body['password'];
// 	     if (addUser(username, password)) {
// 		 res.redirect('/login');
// 	     } else {
// 		 res.redirect('/register');
// 	     }
// 	 });

// // Register URL
// app.get('/register',
// 	(req, res) => res.sendFile('html/register.html',
// 				   { 'root' : __dirname }));

// // Private data
// app.get('/private',
// 	checkLoggedIn, // If we are logged in (notice the comma!)...
// 	(req, res) => {             // Go to the user's page.
// 	    res.redirect('/private/' + req.user);
// 	});
// // A dummy page for the user.
// app.get('/private/:userID/',
// 	checkLoggedIn, // We also protect this route: authenticated...
// 	(req, res) => {
// 	    // Verify this is the right user.
// 	    if (req.params.userID === req.user) {
// 		res.writeHead(200, {"Content-Type" : "text/html"});
// 		res.write('<H1>HELLO ' + req.params.userID + "</H1>");
// 		res.write('<br/><a href="/logout">click here to logout</a>');
// 		res.end();
// 	    } else {
// 		res.redirect('/private/');
// 	    }
// 	});
// app.use(express.static('html'));
// app.get('*', (req, res) => {
//   res.send('Error');
// });


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log(`Server is running`));
