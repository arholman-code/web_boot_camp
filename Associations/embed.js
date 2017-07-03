var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

//Post - title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);
var Post = mongoose.model("Post", postSchema);


// var newUser = new User({
//     email: "lucy@brown.edu", 
//     name: "Lucy Brown"
// });

// newUser.posts.push({
//     title: "How to give advice.",
//     content: "Blockhead."
// });

// newUser.save(function(err, user){
//     if(err) { console.log(err); }
//     else { console.log(user); }
// })

User.findOne({name: "Lucy Brown"}, function(err, user){
    if(err) { console.log(err); }
    else { 
        user.posts.push({
    title: "How to give advice2.",
    content: "Blockhead2."  
    });
    user.save(function(err, user){
        if(err) { console.log(err); }
        else { console.log(user); }
    });
    }
});

// var newPost = new Post({
//     title: "Something About Apples",
//     content: "They are delicious: sometimes green, sometimes red."
// });

// newPost.save(function(err, post){
//     if(err) { console.log(err); }
//     else { console.log(post); }
// });