import { CrudRoutes } from '../CRUD/crud.routes';
import { ProfileRoutes } from './profile.routes';

export const AppRoutes = (app: any) => {
  // define a route handler for the default home page
  app.all( "/", ( req: any, res: any ) => {
    console.log( 'Request:', req.body, req.params, req.query);

    res.json({message: "Hello world! Welcome to basic CRUD API" });
  });

  // Call generic CRUD routes generator
  // CrudRoutes(app, 'test');

  // Call user routes generator
  ProfileRoutes(app);
};
