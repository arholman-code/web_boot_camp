#Rendering HTML and Templates

* Use res.render() to render HTML (from an EJS file)
*   Don't create regular HTML files.  Dynamic HTML files - called TEMPLATES.
* Explain what EJS is and why we use it
*   EJS = Embedded Javascript
* Pass variables to EJS templates
*   using the percent notation <%= VARIABLENAME %>
*   


#EJS Control Flow

* Show examples of control flow in EJS templates
*   Three types of EJS tags
*   <%= %> This returns the VALUE inside in HTML
*   <%  %> This is for LOGIC, as it shouldn't be displayed in the HTML.
*   <-  -> This is for includes
* Write if statements in an EJS file
* Write loops in an EJS file
* 


#Styles and Partials
* Show how to properly include public assets
*   include the stylesheet in the main app file - app.use(express.static("public"));
* Propertly configure our app to use EJS
*   include a view engine argument to use file names without the ejs extention - app.set("view engine", "ejs");
* Use partials to dry up our code!
*   Partials are templates we can write to include in other temples (HTML boilerplate for instance)
*   Like the header/footer



#Post Requests!!!
* Write post routes and test them with Postman
* Use a form to send a post request
* Use body parser to get form data
*   must install "body-parser", not included with express



