import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectCloudinary from "./config/Cloudinary.js";

import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";
//const uri = process.env.URI || "Hardcoded URI";
//console.log('Database URI:', uri);

const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WORKING ");
});

app.listen(port, () => console.log("Server Started", port));
