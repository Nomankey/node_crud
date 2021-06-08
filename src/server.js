import "./db";
import "./models/Video"
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


const PORT = 8888;

console.log(process.cwd());//current working directory

const app = express();
const logger = morgan("dev");

app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")
app.use(express.urlencoded({ extended: true }));
// app.set("views","./src/views");

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => console.log(`server is listening on port http://localhost:${PORT}`);


app.listen(PORT, handleListening); 