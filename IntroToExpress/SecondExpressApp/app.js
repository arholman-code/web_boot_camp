var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment"); 
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "moo",
        dog: "woof woof",
        cat: "hiss",
        snake: "bigger hiss"
    }
    res.send("The " + animal + " says '" + sounds[animal] + "'");
});

app.get("/repeat/:word/:times", function(req, res){
    var word = req.params.word;
    var times = req.params.times;
    var page = "";
    if(word === "hello"){
        for(var i = 0; i < times; i++){
            page += "hello ";
        }
        res.send(page);
    } 
    else if(word === "blah"){
        for(var i = 0; i < times; i++){
            page += "blah ";
        }
        res.send(page);
    } 
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...  What are you doing???"); 
});

//Tell express to listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});