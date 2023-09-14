import { db } from "../database/database";
import { Movie } from "../protocols";

async function create({ name, platform, genre, status }: Movie) {
  await db.query(
    "INSERT INTO movies (name, platform, genre, status) VALUES ($1, $2, $3, $4)",
    [name, platform, genre, status]
  );
}

//async function read() {}

//async function update() {}

//async function delete() {}

export const movieReposotories = { create };
