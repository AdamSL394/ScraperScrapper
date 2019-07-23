var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var exphbs = require("express-handlebars");


var db = require("./models")

var PORT = 3000;


var app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("view"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require("./controllers/scraper.js")

mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

app.get("/scrape", function (req, res) {

  axios.get("https://www.youtube.com/").then(function (response) {


    var $ = cheerio.load(response.data);

    $('h3, #video-title').each(function (i, element) {


      var result = {};

      result.link = $(this).children("a").attr("href");
      result.text = $(this).children("a").text()

      db.Articles.create(result)
        .then(function (dbArticles) {
          console.log(dbArticles);
        })
        .catch(function (err) {
          console.log(err);
        })
    })
    res.json(dbArticles);
    //res.send(dbArticles)
  });
});


app.get("/", function (req, res) {
  console.log("test")
  db.Articles.find({}).then(function (dbArticles) {
    console.log("home", dbArticles)

    res.render("home",{
     
      articles: dbArticles
    })
  })
    .catch(function (err) {
      if (err) {
        res.send(err);
      }
    });
});

app.get("/saved", function (req, res) {
  db.Articles.find({saved:true}).then(function (dbArticles) {
    res.render("saved",{
      articles: dbArticles
    })
  })
    .catch(function (err) {
      if (err) {
        res.send(err);
      }
    });
});


app.get("/articles/:id", function (req, res) {
  db.Articles.findOne({ _id: req.params.id })
  .populate("Notes")
    .then(function (dbArticles) {
      res.json(dbArticles);
    })
    .catch(function (err) {
      res.json(err);
    })
})

app.post("/articles/:id", function (req, res) {
  db.Notes.create(req.body).then(function(){
    console.log("this is the request.body on the server side", )
    console.log(req.body)
    return db.Articles.findOneandUpdate({ _id: req.params.id }, { node: dbNotes._id }, { new: true });
  }).then(function (dbArticle) {
    res.json(dbArticle);
  })
    .catch(function (err) {
      res.json(err);
    })
});

app.put("/articles/:id",function(req,res){
  db.Articles.findOneAndUpdate({ _id: req.params.id}, req.body)
    .then(function (dbArticles) {
      console.log(dbArticles);
      res.json(true);
    })
    .catch(function (err) {
      res.json(err);
    })
})


// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
