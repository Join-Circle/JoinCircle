import mongoose from "mongoose";

// Define schema
const joincircleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create model
const joincircleModel = mongoose.model("Employee", joincircleSchema);

export default joincircleModel;
