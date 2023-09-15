export function notFoundError(message: string) {
  return {
    type: "notFound",
    message: message,
  };
}
