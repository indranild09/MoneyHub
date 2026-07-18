export function successResponse(data, message = "Success") {
  return {
    success: true,
    message,
    data,
  };
}

export function errorResponse(message = "Something went wrong", errors = null) {
  return {
    success: false,
    message,
    errors,
  };
}