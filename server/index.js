import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Routes
app.use("/posts", postRoutes);

mongoose.connect(process.env.DATABASE_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log("Database connected and running...")))
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);