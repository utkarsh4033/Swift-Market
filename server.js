import express from "express";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
//  configurzation
dotenv.config();

//  database config
connectDB();

// rest object
const app = express();

//  middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//  routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);
//  rest api
app.get("/", (req, res) => {
  res.send(`<h1>welcome to ecommerce app</h1>`);
});
//   port
const PORT = process.env.PORT;
//  run listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
