import { Movie } from "protocols";
import { movieReposotories } from "@/repositories/movie.repositories";

async function create(movie: Movie) {
  await movieReposotories.create(movie);
}

async function read() {
  const { rows: movies } = await movieReposotories.read();

  return movies;
}

export const movieServices = { create, read };
