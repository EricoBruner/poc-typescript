import { ErrorRequestHandler } from "express";

export interface Movie {
  id: number;
  name: string;
  platform: string;
  genre: string;
  status?: string;
}

export interface MovieCreateData extends Omit<Movie, "id"> {}

export interface CustomError extends ErrorRequestHandler {
  type: string;
  message: string;
}
