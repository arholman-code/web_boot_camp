var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");
mongoose.Promise = global.Promise;

//MODEL/pattern to use for data
var catSchema = new mongoose.Schema({
   name:  String,
   age: Number,
   temperament: String
});

//builds the model with methods to use find/insert/update/remove
//must be called the singular version of your table/collection
//will pluralize the model into a collection
//this becomes db.cats
var Cat = mongoose.model("Cat", catSchema);


//add cat to db

// var george = new Cat ({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "evil"
// });

//possibility this won't save - if db is not running or internet down/slow
//the if statement in callback function will help if it encounters a problem

// george.save(function(err, cat){
//     if(err){
//         console.log("something went wrong");
//     }
//     else{
//         console.log("saved");
//         console.log(cat);
//     }
// });

/*
    George is what we have in JS - cat is what is returned from mongo
*/

//combines add/save at the same time
Cat.create({
   name: "Tiny",
   age: 3,
   temperament: "coniving"
}, function(err, cat){
    if(err){ console.log(err) }
    else{ console.log(cat) }
});

//retrieve cats from db console.log each

Cat.find({}, function(err, cats){
    if(err){
        console.log("Error" + " " + err);
    }
    else{
        console.log(cats);
    }
});