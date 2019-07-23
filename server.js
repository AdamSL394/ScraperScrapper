var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var exphbs = require("express-handlebars");

// var MONGODB_URI = process.env.MONGODB_URI //|| "mongodb://localhost/unit18Populater";
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_q76zz3z7:ccgdr2eh7oqa1l9db4000q4l8t@ds223756.mlab.com:23756/heroku_q76zz3z7";

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });
// mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });


// var db = require("./models")

var PORT = process.env.PORT || 3000;


var app = express();


// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // app.use(express.static("view"));


// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // var routes = require("./controllers/scraper.js")

// // mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

// app.get("/scrape", function (req, res) {

//   axios.get("https://www.youtube.com/").then(function (response) {


//     var $ = cheerio.load(response.data);

//     $('h3, #video-title').each(function (i, element) {


//       var result = {};

//       result.link = $(this).children("a").attr("href");
//       result.text = $(this).children("a").text()

//       db.Articles.create(result)
//         .then(function (dbArticles) {
//           console.log(dbArticles);
//         })
//         .catch(function (err) {
//           console.log(err);
//         })
//     })
//     res.json(dbArticles);
//     //res.send(dbArticles)
//   });
// });


// app.get("/", function (req, res) {
 
//   db.Articles.find({}).then(function (dbArticles) {


//     res.render("home",{
     
//       articles: dbArticles
//     })
//   })
//     .catch(function (err) {
//       if (err) {
//         res.send(err);
//       }
//     });
// });

// app.get("/saved", function (req, res) {
//   db.Articles.find({id:req.params.id})
//   .populate("note")
//   .then(function (dbArticles) { 
//     console.log("this is the saved note", dbArticles)
//     res.render("saved",{
//       articles: dbArticles
//     })
//   })
//     .catch(function (err) {
//       if (err) {
//         res.send(err);
//       }
//     });
// });

// app.get("/notes/:id",function(req,res){
//   db.Note.findOne({_id:req.params.id})
//   .then(function(dbNote){
//  res.json(dbNote);
//   })
//   .catch(function(err){
//     res.json(err);
//   })
// })

// app.get("/articles/:id", function (req, res) {
//   db.Articles.findOne({ _id: req.params.id })
//     .then(function (dbArticles) {
//       console.log("this is the db article",dbArticles);
//       res.json(dbArticles);
//     })
//     .catch(function (err) {
//       res.json(err);
//     })
// })


// app.put("/articles/:id",function(req,res){
//   db.Articles.findOneAndUpdate({ _id: req.params.id}, req.body)
//     .then(function (dbArticles) {
//       console.log(dbArticles);
//       res.json(true);
//     })
//     .catch(function (err) {
//       res.json(err);
//     })
// })

// app.post("/article/:id/note", function (req, res) {
//   db.Note.create(req.body)
//   .then(function(dbNote){
//     console.log("dbNote", dbNote)
//     return db.Articles.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//   })
//   .then(function (dbArticles) {
//     console.log("dbArtihicle", dbArticles)
//     // res.json(dbArticles);
//   })
//     .catch(function (err) {
//       res.json(err);
//     })
// });





app.get("/", function (req, res) {
 
res.send("hi world!")

});
// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});

