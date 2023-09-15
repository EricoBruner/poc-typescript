import { MovieCreateData } from "protocols";
import { movieReposotories } from "@/repositories/movie.repositories";
import { notFoundError } from "@/errors/not.found";

async function create(movie: MovieCreateData) {
  await movieReposotories.create(movie);
}

async function read() {
  const { rows: movies } = await movieReposotories.read();

  return movies;
}

async function update(movie: MovieCreateData, id: number) {
  const resp = await movieReposotories.update(movie, id);

  if (resp.rowCount == 0) {
    throw notFoundError("Movie not found!");
  }
}

async function deleteById(id: number) {
  const resp = await movieReposotories.deleteById(id);

  if (resp.rowCount == 0) {
    throw notFoundError("Movie not found!");
  }
}

export const movieServices = { create, read, update, deleteById };
