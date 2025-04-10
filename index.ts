import express, { json, Request, Response, NextFunction } from "express";
import { sequelize } from "./models/index";
import { errorHandler  } from "./middlewares/errorHandler";
import authorRoutes from './routes/authorRoutes';
import bookRoutes from './routes/bookRoutes';

const config = require("./config/config.json");
const app = express();

sequelize.sync()
  .then(() => {
    console.log("Database synced!");
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });
  
app.use(json());

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Welcome to our library System."
    });

    next();
});

// Routes
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

// Error Handler
app.use(errorHandler);

app.listen(3000, () => {
    console.log("App started at port 3000")
});