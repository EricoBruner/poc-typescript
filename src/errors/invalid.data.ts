export function invalidDataError(message: string) {
  return {
    type: "invalidData",
    message: message,
  };
}
