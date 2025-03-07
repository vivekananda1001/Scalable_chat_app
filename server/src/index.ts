import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/index.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { setupSocket } from "./socket.js";

const app: Application = express();
const PORT = process.env.PORT || 8000;

const server = createServer(app);

const io = new Server(server,{
  cors: {
    origin: "*"
  }
});

setupSocket(io);
export {io};

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

// Routes
app.use('/api',Routes)

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
