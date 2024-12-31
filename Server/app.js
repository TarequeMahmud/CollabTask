// Importing dependencies
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./src/routes/authRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());

app.use("/", authRouter);

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI;
console.log(mongoUri);

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Test route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
