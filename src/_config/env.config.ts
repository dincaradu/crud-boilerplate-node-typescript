import * as dotenv from "dotenv";

dotenv.config();

// Environment variables
export const PORT = process.env.PORT || '3000';
export const ENVIRONMENT = process.env.NODE_ENV || 'development';
export const BASE_PATH = process.env.BASE_PATH || '/';

// Logging flags
export const ALLOW_LOGS = process.env.ALLOW_LOGS === 'true';
export const ALLOW_ERRORS = process.env.ALLOW_ERRORS === 'true';
export const ALLOW_WARNINGS = process.env.ALLOW_WARNINGS === 'true';

// Database credentials
export const DB = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  name: process.env.DB_NAME
};
