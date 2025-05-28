import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import { json } from "node:stream/consumers";

import userRoutes from "./controllers/models/routes/users.routes.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port" , (process.env.PORT || 8080));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));

app.use("/api/v1/users", userRoutes);

app.set("port", (process.env.PORT || 8080))

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:true}));

const start = async() => {
    app.set("mongo_user");
    const connectionDb = await mongoose.connect("mongodb+srv://test:test123@cluster0.yqgziro.mongodb.net/");
    console.log(`MongoDB Connected DB Host : ${connectionDb.connection.host}`);
    server.listen(app.get("port"), ()=> {
        console.log("Listening on port 8080");
    });
}

start();