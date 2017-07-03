#Databases

##SQL vs NoSQL
* db.table.find()
* db.table.delete
* 

* SQL (relational) vs NoSQL (non-relational)
*   No tables.
*   Things can be nested.
*   BSON - binary javascript object notation
*   Basically javascript object with key/value pairs.
*   You can nest comments within the data.
*   No table structure and very flexible.
*   


#MongoDB
* What is it?
*   Non-relational/NoSQL database.  Very flexible/dynamic
*   FIRST: sudo apt-get install -y mongodb-org
* Why are we using it?
* Install
* 


#Mongo Command Overview
* mongod
*   starts mongo daemon - process.  
* mongo
*   typed in other terminal - opens mongo shell 
*   not normally used during processing
* help
*   returns list of basic features
* show dbs
*   returns all databases stored
* use
*   create OR use a database (creates if not exists)
*   create COLLECTIONS to begin storing data
*   don't have to declare the collection to begin insertion!
*       can use insert immediately to create it
* insert
*   WriteResults nInserted is returned if successful
*   'show collections' in shell will return all collections
* find
*   with no arguments, is essentially a select *
*   db.collection.find(object)  [db.dogs.find({name: "Winston"})]
* update
*   db.collection.update(object, object)
*       First is object to alter (pass in arguments)
*       Second is fields to update after found
*   WITHOUT the 'set' operator, will UPDATE ALL FIELDS to only those 
*   found in the second object
*   The update object MUST be formatted as {$set: {key: value, key: value}}
*       to ensure no overwrite of other fields
* remove
*   pass in object with parameters to delete
*   db.collection.remove(object).limit(n)
*       limits the delete to n as a maximum


* MEAN STACK
*  MONGO, EXPRESS, ANGULAR, NODE
*  


#Mongoose
* What is mongoose?
*   OBJECT DATA MODEL (ODM) to interact with mongodb
*   Basically javascript on top of mongodo
* Why are we using it?
*   Makes it easier to use JS with MongoDB
* Interact with MongoDB using Mongoose
*   connect to database
*   create schema (can REQUIRE some fields)
*   create model - takes schema/name and returns object with methods
*       to interact with mongodb (create/find/remove)
*   create data!