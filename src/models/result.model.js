import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    examName: {
      type: String,
      required: true,
    },
    examType: {
      type: String,
      enum: ["midterm", "final", "practical", "test", "other"],
      required: true,
    },
    examDate: { type: Date },
    year: {
      type: Number,
      required: true,
    },
    result: [
      {
        subject: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Subject",
          required: true,
        },
        marksObtained: { type: Number, required: true },
        totalMarks: { type: Number, required: true },
        grade: { type: String },
        status: {
          type: String,
          enum: ["pass", "fail", "absent"],
          default: "pass",
        },
        remarks: { type: String },
      },
    ],

    spi: { type: Number },
    cpi: { type: Number },

    attempt: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const Result = mongoose.model("Result", resultSchema);
