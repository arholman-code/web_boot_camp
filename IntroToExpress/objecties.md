#Introduction to Express

* What is a framework?  How is it different than a library?
*   * Framework - all control is defined in it.
*   * Library - you are in control of methods/variables.
*   * "INVERSION OF CONTROL"
* What is Express?
*   * A Web Development framework.
* Why are we using express?
*   * Express is the most popular node.js framework (tutorials/community).
*   * Is a very lightweight framework.  Rails does a lot for you (heavyweight) - meaning you don't understand all it's doing.
*   * Uses phrase "unopinionated" to mean it gives you freedom for structure/design.


#Our first express app!

* Review an existing app
* Review http response/request lifecycle
* Create a simple express app


#NPM Init and Package.json
* Use the '--save' flag to install packages
*   When you install a package with this flag, it takes package name and version and saves it into the package.json file for your project.
*   This creates a new dependency along with the version you've used.
* Explain what the package.json file does
* Use 'npm init' to creat a new package.json
*   Run this command in your directory and it assists in the creation of the file for you app.
*       
    * JavaScript Object Notation - holds metadata relevant to a specific project

#More Routing!!
* Show the '*' route matcher
* Discuss route order
*   HINT: a catch all site needs to come at the end of the document.
* Write routes containing route parameters
*   Use a colon in the app.get route to denote a parameter/variable/path variables
*   "/r/:subredditName"
*   the req item contains all the items sent in
*   use req.params to get all values sent in