import { db } from "@/database/database";
import { Movie, MovieCreateData } from "@/protocols";

async function create({ name, platform, genre, status }: MovieCreateData) {
  await db.query(
    "INSERT INTO movies (name, platform, genre, status) VALUES ($1, $2, $3, $4)",
    [name, platform, genre, status]
  );
}

async function read() {
  return await db.query<Movie>("SELECT * FROM movies;");
}

async function readById(id: number) {
  return await db.query<Movie>("SELECT * FROM movies WHERE id=$1;", [id]);
}

async function update(
  { name, platform, genre, status }: MovieCreateData,
  id: number
) {
  return await db.query(
    `UPDATE movies SET name=$1, platform=$2, genre=$3, status=$4 WHERE id=$5;`,
    [name, platform, genre, status, id]
  );
}

async function deleteById(id: number) {
  return await db.query(`DELETE FROM movies WHERE id=$1;`, [id]);
}

export const movieReposotories = { create, read, update, readById, deleteById };
