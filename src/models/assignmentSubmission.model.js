import mongoose from "mongoose";

const assignmentSubmissionSchema = new mongoose.Schema(
  {
    assignmentID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AssignmentAllocation",
      required: true,
    },
    studentID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    attachments: [
      {
        type: String,
      },
    ],
    isApproved: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["submitted", "approved"],
    },
  },
  { timestamps: true }
);

assignmentSubmissionSchema.index(
  { assignmentID: 1, studentID: 1 },
  { unique: true }
);

export const AssignmentSubmission = mongoose.model(
  "AssignmentSubmission",
  assignmentSubmissionSchema
);
