// Import App controller
import App from './app.controller';

// Import Entity controllers
import ProfileController from './modules/profile.controller';
import CrudController from './modules/crud.controller';

// Import Entity Models

// Initialize app controller
const app = new App([
  // new CrudController('user', 'users', ),
  new ProfileController()
]);

app.listen();
