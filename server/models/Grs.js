import mongoose from "mongoose";

const GrSchema = new mongoose.Schema({
  name: String,
  image: String,
  fuel: Array,
  description: String,
  price: String,
  horsepower: String,
  link: String,
});

export const GrModel = mongoose.model("grs", GrSchema);
