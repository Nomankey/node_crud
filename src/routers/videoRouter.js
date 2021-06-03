import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see); //by using regex it can only allow digits from now on
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;