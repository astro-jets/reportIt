// models/District.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const DistrictSchema = new Schema(
  {
    name: { type: String },
    lat: { type: String },
    long: { type: String },
  },
  { timestamps: true }
);

const District = mongoose.models.District || model("District", DistrictSchema);

export default District;
