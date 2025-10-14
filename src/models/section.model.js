import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mentorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Section = mongoose.model("Section", sectionSchema);
