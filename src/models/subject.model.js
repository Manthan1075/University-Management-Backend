import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    syllabus: { type: String, required: true },
    files: [{ type: String }],
    subjectCode: { type: String, required: true, unique: true },
    studyMaterials: [
      {
        title: { type: String, trim: true },
        fileUrl: { type: String },
        type: {
          type: String,
          enum: ["pdf", "ppt", "doc", "video", "link", "other"],
          default: "pdf",
        },
      },
    ],
    totalMarks: {
      type: Number,
      required: true,
    },
    passingMarks: {
      type: Number,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

subjectSchema.index({ name: 1, course: 1 }, { unique: true });

export const Subject = mongoose.model("Subject", subjectSchema);
