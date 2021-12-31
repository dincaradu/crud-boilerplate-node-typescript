import express from "express";
import { ENVIRONMENT, PORT } from "./config/env.config";
import { Log, Start } from './lib/pretty-logging';

const app = express();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world! Welcome to basic CRUD API" );
} );

// start the Express server
app.listen( PORT, () => {
    Log( `Environment: ${ ENVIRONMENT }`, true );
    Start( `Server started at http://localhost:${ PORT }` );
});
