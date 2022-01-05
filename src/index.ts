// 3rd party modules
import cors from "cors";
import express from "express";

// Variable declarations
import { DB, ENVIRONMENT, PORT } from "./config/env.config";
import { Log, Start } from './lib/helpers/pretty-logging.helper';

// Utility functions
import httpErrorMiddleware from "./lib/middleware/http-error.middleware";

// Other imports
import { AppRoutes } from "./app.routes";

const app = express();

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Set CORS options
app.use(cors({
    origin: 'http://localhost:2000/',
    methods: ['GET', 'POST','DELETE','UPDATE','PUT','PATCH']
}));

// Add middleware for intercepting errors
app.use(httpErrorMiddleware);

// Load routes configurator
AppRoutes(app);

// Start the Express server
app.listen( PORT, () => {
    Log( `Environment: ${ ENVIRONMENT }`, true );
    Start( `Database: ${ DB.user }@${ DB.host }/${ DB.name }`)
    Start( `Server started at http://localhost:${ PORT }` );
});
