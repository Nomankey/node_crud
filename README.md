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
/ -> Home</br></br>
/users/join -> Join</br>
/users/login -> Login</br>
/users/edit-> Edit Profile</br>
/users/delete -> Delete Profile</br></br>

/videos/search -> Search Video</br>
/videos/watch -> Watch Video</br>
/videos/edit -> Edit Video</br>
/videos/delete -> Delete Video </br>
/videos/comments -> Comment on a video </br>
/videos/comments/delete -> Delete a comment of a video </br>


#### HTTP method
* get
* send




