import * as dotenv from "dotenv";

dotenv.config();

// Environment
export const PORT = process.env.PORT;
export const ENVIRONMENT = process.env.NODE_ENV;

// Logging
export const ALLOW_LOGS = process.env.ALLOW_LOGS === 'true';
export const ALLOW_ERRORS = process.env.ALLOW_ERRORS === 'true';
export const ALLOW_WARNINGS = process.env.ALLOW_WARNINGS === 'true';