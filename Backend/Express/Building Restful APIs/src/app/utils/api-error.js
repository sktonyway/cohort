class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Check what it does
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = "Bad Request") {
    // It is a wrapper to wrap bad request in ApiError
    return new ApiError(400, message);
  }
  static unauthorized(message = "You are not authorized.") {
    // It is a wrapper to wrap bad request in ApiError
    return new ApiError(400, message);
  }
  static alreadyExist(message = "This user already Exists") {
    return new ApiError(404, message);
  }

  static forbidden(message = "Not allowed to login") {
    return new ApiError(412, message);
  }
}
export default ApiError;
