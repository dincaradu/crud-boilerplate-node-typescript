// Import NPM
import { ConnectionOptions, SimpleConsoleLogger } from 'typeorm';

// Custom imports and definitions
import { TYPEORM_DATABASE, TYPEORM_HOST, TYPEORM_PASSWORD, TYPEORM_PORT, TYPEORM_SYNCHRONIZE, TYPEORM_USERNAME } from './env.config';
import User from '../_lib/entities/user.entity';
import { Session } from '../_lib/entities/session.entity';

// console.log(__dirname + TYPEORM_ENTITIES );

const config: ConnectionOptions = {
  // type: TYPEORM_CONNECTION,
  type: "mysql",
  host: TYPEORM_HOST,
  port: Number(TYPEORM_PORT),
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  entities: [
    User,
    Session
  ],
  synchronize: TYPEORM_SYNCHRONIZE,
};

export default config;
