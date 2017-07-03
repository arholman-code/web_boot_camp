#YelpCamp
* Add Landing Page
* Add Campgrounds Page that Lists all campgrounds
Each campground has:
* Name
* Image

#Add Mongoose
* Install and configure
* Setup our data model
* Use model inside our routes

#Show Page
* Review the RESTful routes 
* Add description to campground model
* Show db.collection.drop()
* Add a show/route template

* (REST)=
REPRESENTATIONAL STATE TRANSFER
* REST is a pattern for defining routes
* CRUD - create, read, update, destroy
* REST is a mapping between HTTP routes and CRUD


RESTFUL ROUTES  (pattern most applications follow!)

name        url           verb      description                                             method
=======================================================================================================================
- INDEX   /dogs           GET     Display a list of all whatever                            Dog.find()
- NEW   /dogs/new         GET     Displays the form to make a new whatever                      n/a
- CREATE  /dogs           POST    Add new whatever to database                              Dog.create()
- SHOW   /dogs/:id        GET     Shows info about a particular item (dog in this case)     Dog.findById()
- EDIT  /dogs/:id/edit    GET     Show edit form for one dog                                Dog.findById()
- Update  /dogs/:id       PUT     Update a particular dog, then redirect                    Dog.findByIdAndUpdate()
- Destroy   /dogs/:id     DELETE  Delete a particular dog, then redirect                    Dog.findByIdAndRemove()
- 



## SEED FILE ##
* Clears the database and adds sample data!

##Nested Routes##
* Combining RESTful routes
*   *campgrounds/:id/<comments/new> for instance
*   *the comments are linked to main page (main data)
*   *basically connecting collections using REST

#Auth
* Passport
* Passport Local
* Passport Local Mongoose
* Walk through auth flow
* Discuss sessions
*   Express-Session
*   HTML is stateless - sessions make it have a state by passing info   
*       about user passing "secret" info between requests
*   Create user model

#Users + Comments
* Associate users and comments

#Users + campgrounds
* Prevent non logged in user from creating campground
* Associate author with post

#Editing Campgrounds
* Add method-override
* add edit route for campgrounds
* add link to edit page
* add update route
* fix $set

#Delete/Destroy
#Authorization
* Authenticate - someone is who they say they are
* Authorization - permissions for that person after confirming identity
* User can only edit their campground
* User can only delete their campground

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

#Deleting Comments
* Add destroy route
* Add Delete Button

#Authorization: Comments
#Refactor Middleware
#Adding in Flash (connect-flash)