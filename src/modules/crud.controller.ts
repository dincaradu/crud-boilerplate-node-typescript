// 3rd party modules
import express, { NextFunction, Request, Response } from 'express';

// Utility functions
import { Warn } from '../_lib/helpers/pretty-logging.helper';

class CrudController {
  public router = express.Router();

  private path: string = '';
  private model: any;

  constructor(entityName: string, model: any) {
    this.path = entityName;
    this.model = model;

    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(this.path, this.create);
    this.router.get(this.path, this.findAll);
    this.router.get(this.path + '/:id', this.findOne);
    this.router.put(this.path + '/:id', this.update);
    this.router.delete(this.path + '/:id', this.remove);
    this.router.delete(this.path, this.deleteAll);
  }

  create = (req: Request, res: Response, next: NextFunction) => {
    Warn(`Create has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }`);
    res.json({ message: `Create has been called` });
  }

  findAll = (req: Request, res: Response, next: NextFunction) => {
    Warn(`findAll has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }`);
    res.json({ message: `findAll has been called` });
  }

  findOne = (req: Request, res: Response, next: NextFunction) => {
    Warn(`findOne has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }`);
    res.json({ message: `findOne has been called` });
  }

  update = (req: Request, res: Response, next: NextFunction) => {
    Warn(`update has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }`);
    res.json({ message: `update has been called` });
  }

  remove = (req: Request, res: Response, next: NextFunction) => {
    Warn(`remove has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }`);
    res.json({ message: `remove has been called` });
  }

  deleteAll = (req: Request, res: Response, next: NextFunction) => {
    Warn(`deleteAll has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }`);
    res.json({ message: `deleteAll has been called` });
  }
}

export default CrudController;
