#YelpCamp

* Add landing page
* Add Campgrounds Page that list all campgrounds
* Each Campground has:
    * name
    * image
    * 

#Layout and Basic Styling
* Chreate our header and footer partials
* Add in Bootstrap
* 

#Styling the campGrounds page
* Add a better header/title
* Make campgrounds display in a grid
* 

#Database
##Introduction to Database
* What is database
    * A collection of information/data 
    * Has an interface(Using code to interact with it)
* SQL(Relational) vs. NoSQL(non-relational)
    * SQL: Define what an object looks like and every object we add mush follow this pattern
    * Using join table to connect different objects
    * Every thing is tabuler (Not flexible)
    * Non-SQL: no need to define tabuler structure.
     
#Our First Mongo Commands
* mongod
* mongo
* help
* show dbs
* use
* insert
* find
* update
* remove
*

# Introduction to Mongoose
* What is Mongoose
 * Model application data into mongodb 
 * 

#Add Mongoose
* Install and configure mongoose
* Setup conpground model
* Use compground model inside of our routes
* 
#Restful Routes
name      url        verb     description
================================================================
INDEX     /dogs      GET      Display a list of all dogs
NEW       /dogs/new  GET      Show form of creating new dogs
CREATE    /dogs      POST     Create a new dog
SHOW      /dogs/:id  GET      Shows info about one dog

#Associations
##Intro to Associations
* Defne associations
* Discuss one:one, one:many and many:many relationships
* 
##Embedding Data
* User
* Post
* 
##Referenceing Data

##Module.exports
* Introduce module.exports
* Move our models into separate file
* 

#Refactor Mongoose Code
* Create a models directory
* Use module.expose
* Require everyting correctly
* 
#Add seeds file
* Add a seeds.js file
* Run the seeds file every time the server starts
* 
#Add the comment model!
* Make our errors go away!
* Display comments on campground show page
* 
#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form
* NEW    campgrounds/:id/comments/new  GET
* CREATE campgrounds/:id/comments      POST
* 
#Style show page
* Add sidebar to show page
* Display comments nicely
* 

#Auth
##Add User Model
* Install all packages needed for auth
* Define User model
* 
##Register
* Configure Passport
* Add register routes
* add tegister template
* 
##Login
* Add login routes
* Add login templae
* 
## Logout/Navbar
* Add logout routes
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/Hide auth links correctly
* 
##Show/Hide links
* Show/hide auth links in navbar correctly
* 

#Refactor
##Refactor the routes
* Use Express router to reoragnize all routes
* 
##User + Comments
* Associate users and comments
* Save author's name to a comment automatically
* 
##User + Campgrounds
* Prevent an unautheticated user from creating a campground
* Save username+id newly created campground
* 

#New Features
## Editing Campgrounds
* Add Method-Override
* Add Edit Route for campgrounds
* Add link to Edit Page
* Addd Update RouteFix $set Problem
* 
##Deleting Campgrounds
* Add destroy route
* Add destroy button
*
## Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/show edit and delete buttons
* 
##Edit Comments
* Add edit route for comments
* Add Edit button
* Add update route
* 
##Deleting Comment
* Add Destroy route
* Add delete button
* 
##Authorization Part 2: Comments
* User can only edit his/her comments
* Uer can only delete his/her comments
* Hide/show edit and delete buttonsRefactor middleware
* 

#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header