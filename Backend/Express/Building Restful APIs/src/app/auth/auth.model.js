import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 5,
      maxlength: 10,
      required: [true, "Enter name to proceed"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Enter email to proceed"],
    },
    password: {
      required: [true, "Enter password"],
      type: String,
      minlength: 8,
      // We know ;)
    },
    role: {
      type: String,
      enum: ["admin", "customer", "seller"],
      default: "customer",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: { type: String, select: false },
    refreshToken: { type: String, select: false },
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpires: { type: Date, select: false },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
