import express from "express";
import morgan from "morgan";

const PORT = 8888;
const app = express();
const logger = morgan("dev");


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

app.use(logger); //logger function will return middleware
app.get('/', home);
app.get('/login', login);


const handleListening = () => console.log(`server is listening on port http://localhost:${PORT}`);


app.listen(PORT, handleListening); 