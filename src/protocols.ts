export interface Movie {
  name: string;
  platform: string;
  genre: string;
  status?: string;
}

export interface CustomError extends Error {
  type: string;
  message: string;
}
