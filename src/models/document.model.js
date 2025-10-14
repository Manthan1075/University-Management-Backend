import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fileUrl: { type: String, required: true },
    issueDate: { type: Date, required: true },
    isVerified: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
    rejectionReason: { type: String },
  },
  { timestamps: true }
);

export const Document = mongoose.model("Document", documentSchema);
