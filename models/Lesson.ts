// models/Lesson.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const LessonSchema = new Schema(
  {
    user: {
      type: String,
    },
    service: {
      type: String,
    },
  },
  { timestamps: true }
);

const Lesson = mongoose.models.Lesson || model("Lesson", LessonSchema);

export default Lesson;
