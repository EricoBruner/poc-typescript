import { Movie } from "protocols";
import { movieReposotories } from "../repositories/movie.repositories";

async function create(movie: Movie) {
  await movieReposotories.create(movie);
}

export const movieServices = { create };
