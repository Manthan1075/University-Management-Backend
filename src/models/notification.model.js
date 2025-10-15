import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    recipients: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        read: { type: Boolean, default: false },
        readAt: { type: Date },
        deleted: { type: Boolean, default: false },
      },
    ],
    sentBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: [
        "general",
        "exam",
        "event",
        "fee",
        "assignment",
        "result",
        "custom",
        "info",
        "alert",
        "reminder",
      ],
      default: "general",
    },
    targetAll: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

notificationSchema.index({ "recipients.user": 1 });

export const Notification = mongoose.model("Notification", notificationSchema);
