import { ErrorReturnObject } from "./error-return-object-interface";

export abstract class CustomError extends Error {
  public abstract statusCode: number;

  constructor(public readonly message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  public abstract serializeErrors(): ErrorReturnObject[];
}
