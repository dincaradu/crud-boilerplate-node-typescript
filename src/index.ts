import express from "express";
import { ENVIRONMENT, PORT } from "./config/env.config";

const app = express();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world! Welcome to basic CRUD API" );
} );

// start the Express server
app.listen( port, () => {
    // console.log( `server started at http://localhost:${ port }` );
});
