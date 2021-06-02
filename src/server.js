import express from "express";
import morgan from "morgan";

const PORT = 8888;

const app = express();
const logger = morgan("dev");
app.use(logger); //logger function will return middleware
// app.get('/', home);
// app.get('/login', login);


const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);


const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);


const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);





app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const routerLogger = (req, res, next) => {
    console.log('PATH: ', req.path);
    next();
}

const methodLogger = (req, res, next) => {
    console.log('METHOD: ', req.method);
    next();
}
const home = (req, res) => {
    res.send("FICKEN");
}

const login = (req, res) => res.send("login");



const handleListening = () => console.log(`server is listening on port http://localhost:${PORT}`);


app.listen(PORT, handleListening); 