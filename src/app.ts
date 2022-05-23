import express, { Application } from 'express';
import dotenv from 'dotenv';
/**
 * Controllers Import
 */
import * as homeController from "./controllers/home";

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 8080;

/**
 *  Routes Controller
 */
app.get("/", homeController.getTitle);
app.get("/home", homeController.getTitleHome);

/**
 * Run App
 */
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});