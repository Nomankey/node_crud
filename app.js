import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes"
// import { nextTick } from "process";
// import { useSimple } from "core-js/fn/symbol";

// const express = require('express'); //getting another module from somewhere else // requiring express
const app = express(); // making an application through a variable by executing express

// const betweenHome = (res, req, next) => { //middleware is like the layer in an onion
//     console.log("between");
//     next();
// };

// const middleware = (req, res, next) => {
//     res.send('not happening')
// };

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// app.use(betweenHome);


app.set('view engine', "pug");
app.use("/", globalRouter);
app.use(routes.users, userRouter); //use means, user want to use the whole router
app.use(routes.videos, videoRouter);
app.use(routes.videos,videoRouter);


export default app;// when somebdoy imports my app, im gonna give my app object