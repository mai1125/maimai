import { Body, Controller, Post, Res } from '@nestjs/common';
import { RequestMessage, Board } from './interfaces/boads.interface';
import { BoardsControllerService } from './boards.controller.service';

@Controller()
export class AppController {
  constructor(
    private readonly boadsControllerService: BoardsControllerService
  ) {}

  @Post('create')
  create(@Body() res: RequestMessage): Promise<Board> {
    return this.boadsControllerService.create(res.message);
  }
}
