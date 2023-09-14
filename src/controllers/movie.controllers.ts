import { Request, Response } from "express";
import { movieServices } from "@/services/movie.services";
import { Movie } from "@/protocols";
import httpStatus from "http-status";

async function create(req: Request, res: Response) {
  const movie = req.body as Movie;

  await movieServices.create(movie);

  return res.sendStatus(httpStatus.CREATED);
}

async function read(req: Request, res: Response) {
  const movies = await movieServices.read();

  return res.status(httpStatus.OK).send(movies);
}

export const movieControllers = { create, read };
