import CustomError from "./custom-error";
import { ErrorReturnObject } from "./error-return-object-interface";

export default class RouteNotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Route not found");

    Object.setPrototypeOf(this, RouteNotFoundError.prototype);
  }

  serializeErrors(): ErrorReturnObject[] {
    return [{ message: "Route not found" }];
  }
}
