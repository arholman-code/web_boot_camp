var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");


User.create({
    email: "Hank@gmail.com",
    name: "Hank Hill"
}) ;
// Post.create({
//     title: "How to cook a burger Part 3",
//     content: "fried egg, bacon!!"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, fndUser){
//       if(err) { console.log(err); }
//       else{
//           fndUser.posts.push(post);
//           fndUser.save(function(err, data){
//               if(err){ console.log(err); }
//               else {console.log(data); }
//           });
//       }
//     });
// });

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//   if (err) { console.log(err); }
//   else { console.log(user); }
// });