import joi from "joi";
import { Movie } from "../protocols";

export const movieSchemas = joi.object<Movie>({
  name: joi.string().required(),
  platform: joi.string().required(),
  genre: joi.string().required(),
  status: joi.string(),
});
