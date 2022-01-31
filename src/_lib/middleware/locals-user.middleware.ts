import { Request, Response, NextFunction } from 'express';


function localsUserMiddleware (req: Request, res: Response, next: NextFunction) {
  res.locals.user = req.user;
  next();
};

export default localsUserMiddleware;
