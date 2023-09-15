import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { CustomError } from "@/protocols";

export default function errorHandler(
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "invalidData") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "notFound") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
}
