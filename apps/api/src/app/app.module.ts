import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmOptions from './typeorm/typeorm.config';

import { BoardsService } from './typeorm/entities/boards.service';
import { UsersControllerService } from './users.controller.service';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmOptions)],
  controllers: [AppController],
  providers: [BoardsService, UsersControllerService],
})
export class AppModule {}
