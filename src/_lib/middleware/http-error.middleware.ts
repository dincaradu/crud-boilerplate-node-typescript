import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/http-exception.model';

/**
 * HttpErrorMiddleware This function checks the request for errors
 * @param error HttpException This is the model for the repsonse object
 * @param request Request This is the request object
 * @param response Response This is the response object
 * @param next NextFunction Callback argument to the middleware function, called "next" by convention
 */
function HttpErrorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';

  response
    .status(status)
    .send({
      status,
      message,
    })
}

export default HttpErrorMiddleware;
