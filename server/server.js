import express from "express";
import "dotenv/config";
import authRoutes from "./src/routes/auth.routes.js";
import connectMongoDB from "./src/db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
