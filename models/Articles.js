var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    text:{
        type:String,
        require:true
    },
    link:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    saved: {
        type:Boolean,
        default:false

    },
    note:{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

var Articles = mongoose.model("Article",ArticleSchema)

module.exports = Articles;
