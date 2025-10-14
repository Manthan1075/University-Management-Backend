import mongoose from "mongoose";

const assignmentAllocationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    attachments: [
      {
        type: String,
        trim: true,
      },
    ],
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    section: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["draft", "published", "completed"],
      default: "published",
    },
    isGroupAssignment: {
      type: Boolean,
      default: false,
    },
    submissionsCount: {
      type: Number,
      default: 0,
    },
    visibility: {
      type: String,
      enum: ["all", "selected"],
      default: "all",
    },
  },
  { timestamps: true }
);

assignmentAllocationSchema.index({ course: 1, section: 1, dueDate: 1 });

export const AssignmentAllocation = mongoose.model(
  "AssignmentAllocation",
  assignmentAllocationSchema
);
