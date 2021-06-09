import "./db";
import "./models/Video";
import app from "./server";


const PORT = 8888;

const handleListening = () => console.log(`server is listening on port http://localhost:${PORT}`);


app.listen(PORT, handleListening); 