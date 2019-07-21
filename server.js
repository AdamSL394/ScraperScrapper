var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");


var db = require("./models")

var PORT = 3000;


var app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("view"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/scraper.js")

app.use(routes);


mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

app.get("/scrape", function (req, res) {

  axios.get("https://www.youtube.com/").then(function (response) {

 
    var $ = cheerio.load(response.data);

    $('h3, #video-title').each(function (i, element) {


      var result = {};

      result.link= $(this).children("a").attr("href");
      result.text= $(this).children("a").text()


      console.log(result.text);
      // console.log(result.link);

      db.Articles.create(result)
      .then(function(dbArticles){
        console.log(dbArticles);
      })
      .catch(function(err){
        console.log(err);
      })
    })
    // res.json(dbArticles);
    res.send("Scrapper Scrapper!")
  });
});

app.get("/articles",function(req,res){
  db.Articles.find({}).then(function(dbArticles){
    res.send(dbArticles)
  })
  .catch(function(err){
    if(err){
      res.send(err);
    }
  });
});


// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
