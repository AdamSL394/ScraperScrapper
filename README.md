# ScraperScrapper
This Repo scapes the Youtube website and returns to the user all video links and titles off the Youtube homepage. We are store this into a <a href="https://www.mongodb.com/what-is-mongodb">Mongo Database.</a> We add a light Schema to it with <a href="https://mongoosejs.com/">Moongoose</a> and generate the scarped inforamtion on the page with Handlebars.The information hass values added on of a boolean to save our video. Once saved they will appear under the saved link  n and a input for  the user to add a note to the scarped videos. We add a note Id to the video link so the users can reference there notes later for a particular video. 

## Perquisites
You can either choose to visit the deployed version on Heroku or clone the the file from Git hub and run in your local browser. For this you will need to install express.

## Running Tests/Instructions
Open the file in your text editor or terminal. Install the node packages listed below. Move into the file you have saved the file in and type node < the filename >.js. This will start the application running.

## Built with:
<ol>
<li> Javascript
<li> Jquery
<li> Axios
<li> Cheerio
<li> Express
<li> Handlebars
<li> Mongoose
</ol>

### Local Development Environment for website Repo
The following will get up and running locally.

Author
Adam Lehrer

![Scraper Scraper](app/assets/HomePage.png)








