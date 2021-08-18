import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmOptions from './typeorm/typeorm.config';

import { BoardsService } from './typeorm/entities/boards.service';
import { BoardsControllerService } from './boards.controller.service';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmOptions)],
  controllers: [AppController],
  providers: [BoardsService, BoardsControllerService],
})
export class AppModule {}
