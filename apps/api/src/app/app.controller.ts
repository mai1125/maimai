import { Body, Controller, Post, Res } from '@nestjs/common';
import { RequestMessage, Board } from './interfaces/boads.interface';
import { UsersControllerService } from './users.controller.service';

@Controller()
export class AppController {
  constructor(
    private readonly usersControllerService: UsersControllerService
  ) {}

  @Post('create')
  create(@Body() res: RequestMessage): Promise<Board> {
    return this.usersControllerService.create(res.message);
  }
}
