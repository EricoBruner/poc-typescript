import { invalidDataError } from "@/errors/invalid.data";
import { NextFunction, Request, Response } from "express";
import { movieSchemas } from "@/schemas/movie.schemas";
import { schemaValidators } from "@/validators/schema.validators";

export function movieValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const movie = { ...req.body };

  const error = schemaValidators(movieSchemas, movie);

  if (error) throw invalidDataError(error);

  next();
}
