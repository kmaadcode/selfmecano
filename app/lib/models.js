import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    streetNber: {
      type: String,
    },
    streetName: {
      type: String,
    },
    zipcode: {
      type: Number,
    },
    city: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    ref: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    deliveredAt: {
      type: Date,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    isValided: {
      type: String,
      enum: ["valide", "enAttente", "annule"],
      select: true,
      default: "valide",
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
