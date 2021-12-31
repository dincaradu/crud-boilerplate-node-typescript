import express from "express";
import { ENVIRONMENT, PORT } from "./config/env.config";
import { Log, Start } from './lib/pretty-logging';

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// define a route handler for the default home page
app.post( "/", ( req, res ) => {
    console.log( 'Request:', req.body, req.params, req.query);

    res.json({message: "Hello world! Welcome to basic CRUD API" });
} );

// start the Express server
app.listen( PORT, () => {
    Log( `Environment: ${ ENVIRONMENT }`, true );
    Start( `Server started at http://localhost:${ PORT }` );
});
