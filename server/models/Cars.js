import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: String,
  image: String,
  fuel: Array,
  description: String,
  price: String,
  horsepower: Number,
  link: String,
});

export const CarModel = mongoose.model("cars", CarSchema);
