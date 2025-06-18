import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import joincircleModel from "./Models/joincircle.js"; // Ensure this file exists and is correctly named

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Vite default port
  credentials: true
}));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/JoinCircle", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

// Routes

// Register Route
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Optional: Check if user already exists
    const existingUser = await joincircleModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json("User already exists");
    }

    const newUser = await joincircleModel.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", details: err });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await joincircleModel.findOne({ email });

    if (!user) {
      return res.status(404).json("No record exist");
    }

    if (user.password !== password) {
      return res.status(401).json("Password is incorrect");
    }

    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
});

// Server Listen
app.listen(3001, () => {
  console.log("✅ Server running at http://localhost:3001");
});
