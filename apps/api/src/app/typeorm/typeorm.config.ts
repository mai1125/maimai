import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as entities from './entities';
import * as migrations from './migrations';
import * as subscribers from './subscribers';

const TypeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(<string>process.env.PORT, 10) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: Object.values(entities),
  migrations: Object.values(migrations),
  subscribers: Object.values(subscribers),
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  migrationsRun: true,
  cli: {
    entitiesDir: __dirname + '/entities',
    migrationsDir: __dirname + '/migrations',
    subscribersDir: __dirname + '/subscribers',
  },
};

export default TypeOrmOptions;
