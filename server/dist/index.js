import express from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/index.js";
import { createServer } from "http";
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    return res.send("It's working 🙌");
});
// Routes
app.use('/api', Routes);
const server = createServer(app);
server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
