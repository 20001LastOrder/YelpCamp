var express = require("express");
var router = express.Router();
var Campground = require("../models/campground")
var middleware = require("../middleware")

router.get("/", function(req, res){
    //Get all campground
    Campground.find({}, function(err, campGrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index",{
                campGrounds:campGrounds,
             });
        }
    });
});

router.get("/new", middleware.isLogined, function(req, res) {
    res.render("campgrounds/new");
});

router.get("/:id", function(req, res){
    //find the camp ground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/show", {camp: foundCamp});
        }
    });
});

router.post("/", middleware.isLogined, function(req, res){
    var name = req.body.name;
    var img = req.body.img;
    var price = req.body.price;
    var description = req.body.description;
    var newCamp = {
        name: name,
        img: img,
        price: price,
        description: description
    };
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    Campground.create(newCamp, function(err, newlyCreated){
       if(err){
           console.log(err);
       }else{
            newlyCreated.author = author;
            newlyCreated.save();
            res.redirect("campGrounds");
       }
    });
});

//Edit Campground Route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCamp){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.render("campgrounds/edit", {camp: foundCamp}); 
        }
    });
});

//Update Campground Route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
   Campground.findByIdAndUpdate(req.params.id, req.body, function(err, updatedCamp){
       if(err){
           res.redirect("/campgrounds");
       }else{
           res.redirect("/campgrounds/"+req.params.id);
       }
   }); 
});

//Destroy Campground Route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    })
});

module.exports = router;