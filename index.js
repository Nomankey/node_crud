import express from "express";

// const express = require('express'); //getting another module from somewhere else // requiring express
const app = express(); // making an application through a variable by executing express

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening localhost ${PORT}`)
}

const handleHome = (req, res) => {
    res.send("Hello from starbucks")
};

const handleProfile = (req, res) => {
    res.send("You are on my profile")
};

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);