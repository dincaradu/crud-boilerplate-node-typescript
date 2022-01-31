import * as dotenv from "dotenv";

dotenv.config();

// Environment variables
export const PORT = process.env.PORT || '3000';
export const ENVIRONMENT = process.env.NODE_ENV || 'development';
export const BASE_PATH = process.env.BASE_PATH || '/api/';
export const SESSION_SECRET = process.env.SESSION_SECRET || 'KNUTBYJVTHCRWHTCY% R^*RT&B*(Y*^B&R*%^VEC&e456ev%^b%*&^EV46e&V^%EV76';

// Logging flags
export const ALLOW_LOGS = process.env.ALLOW_LOGS === 'true';
export const ALLOW_ERRORS = process.env.ALLOW_ERRORS === 'true';
export const ALLOW_WARNINGS = process.env.ALLOW_WARNINGS === 'true';

// TypeORM
export const TYPEORM_CONNECTION = process.env.TYPEORM_CONNECTION || 'mysql';
export const TYPEORM_HOST = process.env.TYPEORM_HOST || 'localhost';
export const TYPEORM_USERNAME = process.env.TYPEORM_USERNAME;
export const TYPEORM_PASSWORD = process.env.TYPEORM_PASSWORD;
export const TYPEORM_DATABASE = process.env.TYPEORM_DATABASE;
export const TYPEORM_PORT = process.env.TYPEORM_PORT || 3306;
export const TYPEORM_SYNCHRONIZE = process.env.TYPEORM_SYNCHRONIZE === 'true';
export const TYPEORM_LOGGING = process.env.TYPEORM_LOGGING === 'true';

// JWT
export const JWT_SECRET = process.env.JWT_SECRET;
