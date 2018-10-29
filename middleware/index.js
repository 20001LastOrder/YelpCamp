var Campground = require("../models/campground");
var Comment = require("../models/comment");

// all the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCamp){
            if(err){
                res.redirect("back");
            }else{
                if(foundCamp.author.id == req.user._id){
                    next(); 
                }else{
                    res.redirect("back");
                }
            }
        })
    }else{
        req.flash("error", "You don't have permission to do this");
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnerShip = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect("back");
            }else{
                if(foundComment.author.id == req.user._id){
                    next(); 
                }else{
                    res.redirect("back");
                }
            }
        })
    }else{
        req.flash("error", "You don't have permission to do this");
        res.redirect("back");
    }
}

//middleware
middlewareObj.isLogined = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Login First");
    res.redirect("/login");
}

module.exports = middlewareObj;