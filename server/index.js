import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { CarModel } from "./models/Cars.js";
import { SuvModel } from "./models/Suvs.js";
import { AlternativeModel } from "./models/Alternatives.js";
import { TruckModel } from "./models/Trucks.js";
import { GrModel } from "./models/Grs.js";

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_CONNECTION;
mongoose.connect(uri);

app.get("/vehicles/cars", (req, res) => {
  CarModel.find()
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
});
app.get("/vehicles/trucks", (req, res) => {
  TruckModel.find()
    .then((trucks) => res.json(trucks))
    .catch((err) => res.json(err));
});
app.get("/vehicles/suvs", (req, res) => {
  SuvModel.find()
    .then((suvs) => res.json(suvs))
    .catch((err) => res.json(err));
});
app.get("/vehicles/alternatives", (req, res) => {
  AlternativeModel.find()
    .then((alternatives) => res.json(alternatives))
    .catch((err) => res.json(err));
});
app.get("/vehicles/grs", (req, res) => {
  GrModel.find()
    .then((grs) => res.json(grs))
    .catch((err) => res.json(err));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
