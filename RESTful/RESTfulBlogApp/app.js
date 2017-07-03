var express     = require("express"),
    app         = express(),
    expressSanitizer = require("express-sanitizer"),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose    = require("mongoose");
    
// app config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//MUST GO AFTER BODY PARSER
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//schema/model setup
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now }
    //this works to set data as defaults if not entered.
})
var Blog = mongoose.model("Blog", blogSchema);

app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){ console.log("error"); }
        else{
            res.render("index", {blogs: blogs}); 
        }
    });
});

//New Route
app.get("/blogs/new", function(req, res){
   res.render("new"); 
});

//Create Route
app.post("/blogs", function(req, res){
   //create
   req.body.blog.body = req.sanitize(req.body.blog.body);
   Blog.create(req.body.blog, function(err, newBlog){
       if(err){ res.render("new"); }
       else{
           res.redirect("/blogs");
       }
   })
});

//Show Route
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, fndBlog){
       if(err){ res.redirect("/blogs"); }
       else{
           res.render("show", {blog: fndBlog});
       }
   });
});


//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, fndBlog){
       if(err){ res.redirect("/blogs"); }
       else{
           res.render("edit", {blog: fndBlog});
       }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
   req.body.blog.body = req.sanitize(req.body.blog.body);
   Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, upBlog){
      if(err){
          res.redirect("/");
      } 
      else{
          res.redirect("/blogs/" + req.params.id);
      }
   });
});

//DELETE/DESTROY ROUTE
app.delete("/blogs/:id", function(req, res){
   Blog.findByIdAndRemove(req.params.id, function(err){
       if(err){
          res.redirect("/blogs");
       }
       else{
          res.redirect("/blogs");
       }
   }); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started.");
});