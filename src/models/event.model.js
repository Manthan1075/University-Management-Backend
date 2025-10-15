import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    staringDate: { type: Date, required: true },
    endingDate: { type: Date, required: true },
    location: { type: String, required: true },
    banner: {
      type: String,
    },
    targetAll: {
      type: Boolean,
      default: false,
    },
    targetYears: [
      {
        type: Number,
      },
    ],
    targetGender: {
      type: String,
      enum: ["male", "female", "any"],
      default: "any",
    },
    targetCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    targetSections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    targetRoles: [
      {
        type: String,
        enum: ["student", "teacher", "staff", "admin", "all"],
      },
    ],
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
