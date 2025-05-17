import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ALLOW_ORIGIN, // Allow requests from specified origin
    credentials: true // allows the client to send credentials like cookies in the request
}))

app.use(express.json({ limit: "16kb" })); // Limit the size of JSON payloads to 16kb
app.use(express.urlencoded({ limit: "16kb", extended: true })); // Limit the size of URL-encoded data to 16kb
app.use(express.static("public")); // Serve static files from the "public" directory

app.use(cookieParser());

// Routes Import
import userRouter from './routes/user.route.js';

// Routes Declaration
app.use('/api/v1', userRouter);

export { app };