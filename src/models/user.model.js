import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9]{10}$/, "Invalid contact number"],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "admin", "teacher", "staff"],
      default: "student",
    },
    status: {
      type: String,
      enum: ["active", "inactive", "suspended", "pending"],
      default: "pending",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    profilePicture: {
      type: String,
      default: null,
    },
    dob: {
      type: Date,
      default: null,
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
    enrollmentNumber: {
      type: String,
      unique: true,
      sparse: true,
      index: true,
      default: null,
    },
    address: {
      street: { type: String, trim: true, default: null },
      city: { type: String, trim: true, default: null },
      state: { type: String, trim: true, default: null },
      country: { type: String, trim: true, default: "India" },
      pincode: { type: String, trim: true, default: null },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    lastLoginAt: {
      type: Date,
      default: null,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      default: null,
    },
    parentDetails: [
      {
        name: { type: String, trim: true },
        contactNumber: { type: Number, trim: true },
        relation: { type: String, trim: true },
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
