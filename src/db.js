import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/alpacatube", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const handleOpen = () => console.log("Connected to Data Base");
const handleError = (error) => console.log("Data Base Error", error)

const db = mongoose.connection;
db.on("error", handleError);
db.once("open", handleOpen);