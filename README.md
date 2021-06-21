b# node_crud

## My first node js toy project
* my personal goal is understanding the logic of crud

## Pages:
* Home
* Join
* Login
* Search
* User Detail
* Edit Profile
* Change Password
* Upload
* Video Detail
* Edit Video

## What I have learned during this project

#### packagae.json
package.json is just a package, npm will be able to use things in package
* "scripts" => able to type 'npm run (name of the script)'
    * ex) "scripts": {"dev": nodemon --exec babel-node src/server.js} => 'npm run dev'

* "dependencies" => packages that the project needs to run
    * everything that the user has installed go to node_modules folder
    * and things that are saved in node_modules dont have to go to git
* "devDependencies" => packages that the developer need to program the project

#### babel
presets are plugins
* {"presets": ["@babel/preset-env"]}
    * allows to use latest version of javascript


#### server
**server** is a computer that is always turned on, connected to the internet and listening for requests</br>
server can not listen to every computer so defining port is important. when you send a request it's sent through the port

server is like a building and routes are doors

* types of routes: '/', '/login', '/change-password'


every **controllers** have request and response and these are given to you buy express

* **request**: something that we ask to the server
    * but we can request to the server that is listening to you
    * examples of requests: cookies, IP address, browser info...

* **response**: function to respond to requests, respond is essential cause if it does not respond browser gonna be very very slow
    * ex): </br>
        ```
        const handleHome = (req, res) => res.send ('<h1>SENT</h1>');
    ```

#### middlewares
software in the middle. They are like controllers. which it has request and response like it. So everything is middle where
* example
```
const routerLogger = (req, res, next) => next();

const methodLogger = (req, res, next) => next();

const home = (req, res, next) => res.send("hello next");

app.get('/', methodLogger, routerLogger, home);

// hello next
```
* morgan
    * it's request logger middleware for node.js. if you call morgan function, it returns middlewares

    * morgan has GET, path, status code => GET /login 304 2.815ms - -
    ```
    morgan('combined', {
        skip: function (req, res) {return res.statusCode < 400}
    })
    ```


#### Routers
it allows you to organize your controllers and  URLs.</br>
In this project it has two huge branch of routers. => 1. USERS 2. VIDEOS</br>

##### routers used in this project
/ -> Home</br>
/join -> Join</br>
/login -> Login</br>
/search -> Search</br>

/users/:id-> See User</br>
/users/logout -> Log Out</br>
/users/edit -> Edit My Profile</br>
/users/delete -> Delete Profile</br></br>

/videos/:id -> See Video</br>
/videos/:id/edit -> Edit Video</br>
/videos/:id/delete -> Delete Video </br>
/videos/upload -> Upload Video</br>


#### export, import
* import express from "express"
    * importing export default
* import { edit } from "../controllers/userControllers"
    * importing export

#### Parameter
https://expressjs.com/en/guide/routing.html
```
videoRouter.get("/:id", see); video/12 videoRouter.get("/:id/edit", edit); video/12/edit
```
it's important to put ":", and this allows URLs to have variables inside.


#### HTTP method
* get
* send

#### View Engine
the view engine i used in this project is pug
to render the pug file in views folder
```
export const trending = (req, res) => res.render("home");
```
setting directory to find view files 
```
app.set("views", process.cwd() + "/src/views")
```
like the code below it is possible to put javascript code in pug
```
doctype html
html(lang="en")
    head
        title AlpacaTube
    body
        h1 watch video
        footer &copy; #{new Date().getFullYear()} AlpacaTube
```
* partials: helps to prevent unneccessary overlap of codes
* extend: using base file
* block: in a template i like a window/ it's a place i can put things inside of
* mixin: it's a partial that receives data
    * use mixins when it doesn't have the same shape but not same data. so mixin is like a smart partial

#### How to post data on Backend
```
form(method="POST")
```
* method is how we want to transmit information between the form and Backend
    * if the method is "GET" , the information goes to URL

    * if you wnat add, delete or edit the answer is "POST"

* So what is the data going to do in my backend?
* When you use a form all the data are recieved at req.data
* GET VS POST
    * GET: retrieves a representation of the specified resource and include all required data in the URL.
        * it should not be used for operations that cause side-effects like taking actions in web applications. 
    * POST: writes data, submits data to be processed(from an HTML form) to the identified resource.
        * This results in the creation of a new resource or the updates of existing resources or both

#### MONGO DB
* it is a document based data base
    * on mongodb, what i save are saved as json like database like how things saved in package.json

* to run MongoDB Commuinity Edition
```
brew services start mongodb-community@4.4

```
* to stop MongoDB Community Eidtion
```
brew services stop mongodb-community@4.4

```

* To Verify MongoDB is running
```
brew services list

```

* Connect and Use MONGO DB
```
mongo

```
#### Mongoose
it's a package that allows the user to talk with MONGO DB with JavaScript
* a mongoose schema defines the structure of the document, default values, validators etc., where a **Mongoose model** provides an interface to the database for creating, querying, updating, deleting, routing, etc.



