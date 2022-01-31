// 3rd party modules
import express, { Application } from "express";
import compression from "compression";
// import session from "express-session";
import cors from "cors";
// import passport from "passport";
// import bluebird from "bluebird";  // compresses requests
import lusca from "lusca";
// import { getConnection } from "typeorm";
// import { TypeormStore } from 'typeorm-store';

// Variable declarations
import {
    BASE_PATH,
    ENVIRONMENT,
    PORT,
    // SESSION_SECRET,
    TYPEORM_CONNECTION,
    TYPEORM_DATABASE,
    TYPEORM_HOST,
    TYPEORM_PORT,
    TYPEORM_USERNAME
} from "./_config/env.config";

// Utility functions
import { Log, Start } from './_lib/helpers/pretty-logging.helper';
import httpErrorMiddleware from "./_lib/middleware/http-error.middleware";
import localsUserMiddleware from "./_lib/middleware/locals-user.middleware";

// API keys and Passport configuration
// import * as passportConfig from "./_config/passport.config";

// Import type definitions
import iController from './_lib/interfaces/controller.interface';
// import { Session } from "./_lib/entities/session.entity";

class App {
    public app: Application;
    public port: string;

    constructor(controllers: iController[]) {
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
            Start(`Database: ${TYPEORM_CONNECTION}://${TYPEORM_USERNAME}@${TYPEORM_HOST}:${TYPEORM_PORT}/${TYPEORM_DATABASE}`)
            Start(`Server started at http://localhost:${PORT}${BASE_PATH}`);
        });
    }

    private initializeMiddlewares(): void {
        // Make sure the connection is ready before doing this
        // const repository = getConnection().getRepository(Session);

        // Compress the request
        this.app.use(compression())
        // Parse requests of content-type - application/json
            .use(express.json())
        // Parse requests of content-type - application/x-www-form-urlencoded
            .use(express.urlencoded({ extended: true }))
        // Set CORS options
            .use(cors({
                origin: '*',
                methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
            }))
        // Authentication and authorization
            // .use(session({
            //     resave: true,
            //     saveUninitialized: true,
            //     secret: SESSION_SECRET,
            //     store: new TypeormStore({ repository })
            // }))
            // .use(passport.initialize())
            // .use(passport.session())
            .use(lusca.xframe("SAMEORIGIN"))
            .use(lusca.xssProtection(true))
            .use(localsUserMiddleware);
    }

    private initializeControllers(controllers: iController[]): void {
        // Self explanatory, but the purpose of the iteration is declaration of routes and initialization of the controllers
        controllers.forEach((controller: iController) => {
            this.app.use(BASE_PATH, controller.router);
        });
    }

    private initializeErrorHandling(): void {
        // Add middleware for intercepting errors
        this.app.use(httpErrorMiddleware);
    }
}

export default App;
