import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    shortName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: [
        "computer",
        "management",
        "science",
        "arts",
        "commerce",
        "law",
        "medical",
        "engineering",
        "other",
      ],
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    duration: {
      type: String,
      required: true,
      trim: true,
      default: "4 Years",
    },
    images: [{ type: String, trim: true }],
    isActive: {
      type: Boolean,
      default: true,
    },
    eligibilityCriteria: {
      type: String,
      trim: true,
    },
    TotalSeats: {
      type: Number,
      required: true,
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    inquiryInfo: {
      contact: { type: String, trim: true },
      email: { type: String, trim: true },
      address: { type: String, trim: true },
    },
    careerOptions: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
