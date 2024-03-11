import mongoose from "mongoose";

const AlternativeSchema = new mongoose.Schema({
  name: String,
  image: String,
  fuel: Array,
  description: String,
  price: String,
  horsepower: Number,
  link: String,
});

export const AlternativeModel = mongoose.model(
  "alternatives",
  AlternativeSchema
);
