var mongoose = require("mongoose");

//Schema Setup
var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   img: String,
   description: String,
   author: {
     id: String,
     username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }   
   ]
});

module.exports = mongoose.model("camp-ground", campgroundSchema);