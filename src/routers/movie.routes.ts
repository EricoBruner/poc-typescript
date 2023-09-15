import { Router } from "express";
import { movieControllers } from "@/controllers/movie.controllers";
import { movieValidator } from "@/middlewares/movie.validator";

const movieRouter = Router();

movieRouter.post("/movies", movieValidator, movieControllers.create);
movieRouter.get("/movies", movieControllers.read);
movieRouter.put("/movies/:id", movieValidator, movieControllers.update);
movieRouter.delete("/movies/:id", movieControllers.deleteById);

export default movieRouter;
