var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user")

router.get("/", function(req, res){
    res.render("landing");
});

//*******************************************
//Auth Routes
//*******************************************

//show register form
router.get("/register", function(req, res) {
    res.render("register");
});

//sign up logical
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("register");
        }else{
            passport.authenticate("local")(req, res, function(){
               req.flash("success", "You became a member of YelpCamp. Welcome " + user.username);
               res.redirect("/campgrounds"); 
            });
        }
    });
});

router.get("/login", function(req, res){
   res.render("login"); 
});

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: "Wrong password or username"
}),function(req, res) {
    if(req.isAuthenticated()){
        req.flash("success", "Welcome! " + req.user.username);
        res.redirect("/campgrounds");
    }
});

//logout route
router.get("/logout", function(req, res) {
   req.logout();
   req.flash("Success", "You have logout");
   res.redirect("/campgrounds");
});

module.exports = router;