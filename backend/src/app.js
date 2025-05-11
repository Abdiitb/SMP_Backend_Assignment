import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ALLOW_ORIGIN, // Allow requests from specified origin
    credentials: true // allows the client to send credentials like cookies in the request
}))

// Routes Import
import userRouter from './routes/user.route.js';

// Routes Declaration
app.use('/api/v1', userRouter);

export { app };