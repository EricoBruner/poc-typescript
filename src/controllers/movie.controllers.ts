import { Request, Response } from "express";
import { movieServices } from "../services/movie.services";
import { Movie } from "../protocols";
import httpStatus from "http-status";

function create(req: Request, res: Response) {
  const movie = req.body as Movie;

  movieServices.create(movie);

  return res.sendStatus(httpStatus.CREATED);
}

export const movieControllers = { create };
