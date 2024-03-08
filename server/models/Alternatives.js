import mongoose from "mongoose";

const AlternativeSchema = new mongoose.Schema({
  name: String,
  image: String,
  fuel: Array,
  description: String,
  price: String,
  horsepower: String,
  link: String,
});

export const AlternativeModel = mongoose.model(
  "alternatives",
  AlternativeSchema
);
