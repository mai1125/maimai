import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmOptions from './typeorm/typeorm.config';

import { UsersService } from './typeorm/entities/users.service';
@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmOptions)],
  controllers: [AppController],
  providers: [UsersService],
})
export class AppModule {}
