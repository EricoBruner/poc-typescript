import { Router } from "express";
import movieRouter from "./movie.routes";

const router = Router();

router.use(movieRouter);

export default router;
