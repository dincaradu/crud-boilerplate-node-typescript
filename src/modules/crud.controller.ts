// 3rd party modules
import express, { Request, Response } from 'express';

// Utility functions
import { Warn } from '../_lib/helpers/pretty-logging.helper';

class CrudController {
  public router = express.Router();

  private entity: string = '';
  private entities: string = '';
  private model: any;

  constructor(entity: string, entities: string, model: any) {
    this.entity = entity;
    this.entities = entities;
    this.model = model;

    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(this.entity, this.create);
    this.router.get(this.entities, this.findAll);
    this.router.get(this.entity + '/:id', this.findOne);
    this.router.put(this.entity + '/:id', this.update);
    this.router.delete(this.entity + '/:id', this.remove);
    this.router.delete(this.entities, this.deleteAll);
  }

  create = (req: Request, res: Response, next: NextFunction) => {
    Warn('Create has been called');
    res.json({ message: 'Create has been called' });
  }

  findAll = (req: Request, res: Response, next: NextFunction) => {
    Warn('findAll has been called');
    res.json({ message: 'findAll has been called' });
  }

  findOne = (req: Request, res: Response, next: NextFunction) => {
    Warn('findOne has been called');
    res.json({ message: 'findOne has been called' });
  }

  update = (req: Request, res: Response, next: NextFunction) => {
    Warn('update has been called');
    res.json({ message: 'update has been called' });
  }

  remove = (req: Request, res: Response, next: NextFunction) => {
    Warn('remove has been called');
    res.json({ message: 'remove has been called' });
  }

  deleteAll = (req: Request, res: Response, next: NextFunction) => {
    Warn('deleteAll has been called');
    res.json({ message: 'deleteAll has been called' });
  }
}

export default CrudController;
