import express from 'express';
import { CrudController } from './crud.Controller';

export const CrudRoutes = (app: any, endpoint: string) => {
  const router = express.Router();

  // Create a new entity
  router.post("/", CrudController.create);

  // Retrieve all entities
  router.get("/", CrudController.findAll);

  // Retrieve a single entity with id
  router.get("/:id", CrudController.findOne);

  // Update an entity with id
  router.put("/:id", CrudController.update);

  // Delete an entity with id
  router.delete("/:id", CrudController.remove);

  // Delete all entities
  router.delete("/", CrudController.deleteAll);

  app.use('/api/' + endpoint, router);
};