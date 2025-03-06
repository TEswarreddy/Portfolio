import { createServer } from "http";
import { Server } from "socket.io";
// this help to cross origin resource sharing enable secure communication between a server and a client application running on a different origin (domain, protocol, or port). 
import cors from "cors";
// this package help to read environment variables
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";


//Import routes
import contactRoute from "./routes/contact.js";


dotenv.config();
const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

// WebSocket Server with CORS
const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
    },
  });

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: process.env.FRONTEND_URL || "http://localhost:5173",
      credentials: true,
    })
);

app.use("/socket.io/", (req, res, next)=> next());

//API Routes
app.use("/api/v1/contact", contactRoute);


app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});
  
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
  
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Go up one level
  
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Start Server & Connect to Database
server.listen(PORT, async () => {
    console.log(`🚀 Server running at port ${PORT}`);
});