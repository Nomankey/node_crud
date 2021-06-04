import express from "express";
import { watch, getEdit, postEdit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch); //by using regex it can only allow digits from now on
videoRouter.get("/:id(\\d+)/edit", getEdit); // renders form on edit page
videoRouter.post("/:id(\\d+)/edit", postEdit) // post edit

export default videoRouter;