import mongoose from "mongoose";

const timeTableSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["lecture", "exam"],
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    date: {
      type: Date,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
    examType: {
      type: String,
      enum: ["midterm", "final", "practical", "test","other"],
    },
  },
  { timestamps: true }
);

export const TimeTable = mongoose.model("TimeTable", timeTableSchema);
