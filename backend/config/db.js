import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ajay:Ajay6527@cluster0.olt9ck9.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("DB Connected successfully");
    });
};
