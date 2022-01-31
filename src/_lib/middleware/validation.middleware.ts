// 3rd party modules
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, RequestHandler, Response } from 'express';

// Exceptions imports
import HttpException from '../exceptions/http.exception';


function validationMiddleware<T>(type: any): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(plainToInstance(type, req.body))
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
          next(new HttpException(400, message));
        } else {
          next();
        }
      });
  };
}

export default validationMiddleware;
