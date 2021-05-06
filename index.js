import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { nextTick } from "process";

// const express = require('express'); //getting another module from somewhere else // requiring express
const app = express(); // making an application through a variable by executing express

const PORT = 8080;

const handleListening = () => console.log(`Listening localhost ${PORT}`);

const handleHome = (req, res) => res.send("Hello from starbucks");

const handleProfile = (req, res) => res.send("You are on my profile");

// const betweenHome = (res, req, next) => { //middleware is like the layer in an onion
//     console.log("between");
//     next();
// };

const middleware = (req, res, next) => {
    res.send('not happening')
};

app.use(morgan("development"));
app.use(helmet());
// app.use(betweenHome);

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);