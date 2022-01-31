// Import NPM packages
import "reflect-metadata";
import { createConnection } from "typeorm";

// Custom config
import config from "./_config/orm.config";

// Import App controller
import App from './app.controller';

// Import Entity controllers
import ProfileController from './_lib/modules/profile.controller';
// import CrudController from './modules/crud.controller';

// Import Entity Models

// Initialize app controller
(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }

  const app = new App(
    [
      new ProfileController(),
    ],
  );

  app.listen();
})();
