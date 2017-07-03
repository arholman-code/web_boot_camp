var express         = require("express"),
        app         = express(),
 bodyParser         = require("body-parser"),
   mongoose         = require("mongoose"),
   flash            = require("connect-flash"),
   passport         = require("passport"),
   LocalStrategy    = require("passport-local"),
   methodOverride   = require("method-override"),
   Campground       = require("./models/campground"),
   Comment          = require("./models/comment"),
   User             = require("./models/user"),
   seedDB           = require("./seeds")

//requiring routes in ./routes
var campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index"),
    commentRoutes = require("./routes/comments")

//export DATABASEURL=mongodb....  local 
//set to production on mLab ONLY by adding a config variable in settings (heroku)
var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp"
mongoose.connect(url);

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();  //seed the database

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "Can coconuts migrate?",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware that is called on ALL routes
//sets a variable called currentUser to ALL calls - access in EJS
app.use(function(req, res, next){
    res.locals.currentUser = req.user; 
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

//by passing a prefix, it appends to all routes in the related file
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

//FAIL ROUTE
app.get("*", function(req, res){
    res.send("AWWW SHIT SON!  THAT PAGE DON'T EXIST!");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started."); 
});
