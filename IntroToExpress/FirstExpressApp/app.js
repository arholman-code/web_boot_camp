var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there!"); 
});

app.get("/bye", function(req, res){
    res.send("Goobye");
});

app.get("/dog", function(req, res){
    res.send("Meow");
});

app.get("/r/:subredditName/", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});

app.get("/r/:subredditName/:comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("Welcome to a sub-sub-reddit");
});

app.get("*", function(req, res){
   res.send("you are a star"); 
});

//Tell express to listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});