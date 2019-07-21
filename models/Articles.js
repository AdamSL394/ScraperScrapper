var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    link:{
        type:String,
        required:true
    },
    note:{
        type: Schema.Types.ObjectId,
        ref:"Note"
    }
});

var Articles = mongoose.model("Article",ArticleSchema)

module.exports = Articles;
