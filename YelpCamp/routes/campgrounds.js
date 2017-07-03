var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//INDEX ROUTE
router.get("/", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
       if(err){ console.log("THERE'S AN ERROR!"); }
       else { res.render("campgrounds/index", {campgrounds: allCampgrounds}); }
    });
    //res.render("campgrounds", {campgrounds: campgrounds});
});

//CREATE ROUTE
router.post("/", middleware.isLoggedIn, function(req, res){
    // data from form, add to array.
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var dsc = req.body.description;
    //add user data to newCamp item
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name: name, price: price, image: image, description: dsc, author: author};
    //push new campground to database
    Campground.create(newCampground, function(err, newCamp){
        if(err){ 
            console.log("Error homey!");     
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

//NEW ROUTE
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new"); 
});

//SHOW ROUTE
router.get("/:id", function(req, res){
    //find the campground with id
    //uses Populate/Exec to query with the foreign key
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){ console.log("Found an error"); }
        else{
            //render page with information about a particular campground
            res.render("campgrounds/show", {campground: foundCampground });
        }
    });
});

//edit campground route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

//update campground route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    //combines search and update
    Campground.findByIdAndUpdate(req.params.id,req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        }
        else{
            req.flash("succes","Campground info updated.")
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//destroy campground route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }
        else {
            req.flash("success","Campground removed.")
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;