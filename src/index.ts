import cors from "cors";
import express from "express";
import { ENVIRONMENT, PORT } from "./config/env.config";
import { Log, Start } from './lib/helpers/pretty-logging.helper';

// Utility functions
import httpErrorMiddleware from "./lib/middleware/http-error.middleware";

// Other imports
import { AppRoutes } from "./app.routes";

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set CORS options
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
    Start( `Server started at http://localhost:${ PORT }` );
});
