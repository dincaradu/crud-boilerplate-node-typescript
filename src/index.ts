import cors from "cors";
import express from "express";
import { ENVIRONMENT, PORT } from "./config/env.config";
import { Log, Start } from './lib/pretty-logging';

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


// start the Express server
app.listen( PORT, () => {
    Log( `Environment: ${ ENVIRONMENT }`, true );
    Start( `Server started at http://localhost:${ PORT }` );
});
