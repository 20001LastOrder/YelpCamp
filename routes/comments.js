var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

router.get("/new", middleware.isLogined, function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new",{camp: campground});
        }
    });
});

router.post("/", middleware.isLogined, function(req, res){
   //lookup campground using ID
    //create new comments
   //connect comment with campground
   //redirect to show page
   Campground.findById(req.params.id, function(err, camp){
       if(err){
           console.log(err);
           res.redirect("campgrounds");
       }else{
           Comment.create(req.body.comment, function(err, comment){
               if(err){
                   console.log(err);
               }else{
                   //add username and id to comment
                   comment.author.id = req.user._id;
                   comment.author.username = req.user.username;
                   //save comment
                   comment.save();
                   
                   camp.comments.push(comment);
                   camp.save(function(err){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/campgrounds/"+camp._id);
                        }
                   });
               }
           });
       }
   });
});

router.get("/:comment_id/edit", middleware.checkCommentOwnerShip, function(req, res){
    Comment.findById(req.params.comment_id, function(err, comment) {
        if(err){
            res.redirect("back");
        }else{
            res.render("comments/edit",{
                campId: req.params.id,
                comment: comment
            })
        }
    });
});

router.put("/:comment_id", middleware.checkCommentOwnerShip, function(req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
       if(err){
           res.redirect("back");
       }else{
           res.redirect("/campgrounds/" + req.params.id);
       }
    }); 
});

router.delete("/:comment_id", middleware.checkCommentOwnerShip, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            res.redirect("back");
        }else{
            req.flash("success", "Comment has been deleted")
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
});

module.exports = router;