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
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    dayOfWeek: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
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
      enum: ["midterm", "final", "practical", "test", "other", "None"],
    },
  },
  { timestamps: true }
);

timeTableSchema.index({ course: 1, section: 1, type: 1 });

export const TimeTable = mongoose.model("TimeTable", timeTableSchema);
