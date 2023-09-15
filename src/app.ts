import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "@/routers/index.routes";
import errorHandler from "@/middlewares/error.handler";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

app.use(router);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`👾 Server running on port ${port} 👾`);
});
