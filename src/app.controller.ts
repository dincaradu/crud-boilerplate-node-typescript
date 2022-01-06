// 3rd party modules
import cors from "cors";
import express, { Application } from "express";

// Variable declarations
import { BASE_PATH, DB, ENVIRONMENT, PORT } from "./_config/env.config";

// Utility functions
import { Log, Start } from './_lib/helpers/pretty-logging.helper';
import httpErrorMiddleware from "./_lib/middleware/http-error.middleware";

// Import type definitions
import Controller from './interfaces/controller.interface';

class App {
    public app: Application;
    public port: string;

    constructor(controllers: Controller[]) {
        this.app = express();
        this.port = PORT;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    public listen(): void {
        // Start the Express server
        this.app.listen(PORT, () => {
            Log(`Environment: ${ENVIRONMENT}`, true);
            Start(`Database: ${DB.user}@${DB.host}/${DB.name}`)
            Start(`Server started at http://localhost:${PORT}${BASE_PATH}`);
        });
    }

    private initializeMiddlewares(): void {
        // Parse requests of content-type - application/json
        this.app.use(express.json());

        // Parse requests of content-type - application/x-www-form-urlencoded
        this.app.use(express.urlencoded({ extended: true }));

        // Set CORS options
        this.app.use(cors({
            origin: 'http://localhost:2000/',
            methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
        }));
    }

    private initializeControllers(controllers: Controller[]): void {
        // Self explanatory, but the purpose of the iteration is declaration of routes and initialization of the controllers
        controllers.forEach((controller: Controller) => {
            this.app.use(BASE_PATH, controller.router);
        });
    }

    private initializeErrorHandling(): void {
        // Add middleware for intercepting errors
        this.app.use(httpErrorMiddleware);
    }
}

export default App;
