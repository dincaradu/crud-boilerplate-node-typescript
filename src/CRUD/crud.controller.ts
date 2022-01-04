import { Log, Warn } from '../lib/pretty-logging';

const create = (req: any, res: any) => {
  Warn( 'Create has been called' );
  res.json({message: 'Create has been called'});
}

const findAll = (req: any, res: any) => {
  Warn( 'findAll has been called' );
  res.json({message: 'findAll has been called'});
}

const findOne = (req: any, res: any) => {
  Warn( 'findOne has been called' );
  res.json({message: 'findOne has been called'});
}

const update = (req: any, res: any) => {
  Warn( 'update has been called' );
  res.json({message: 'update has been called'});
}

const remove = (req: any, res: any) => {
  Warn( 'remove has been called' );
  res.json({message: 'remove has been called'});
}

const deleteAll = (req: any, res: any) => {
  Warn( 'deleteAll has been called' );
  res.json({message: 'deleteAll has been called'});
}

export const CrudController = {
  create,
  findAll,
  findOne,
  update,
  remove,
  deleteAll
};