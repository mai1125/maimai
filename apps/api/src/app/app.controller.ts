import { Body, Controller, Post, Res } from '@nestjs/common';
import { RequestUser, User } from './interfaces/users.interface';
import { UsersControllerService } from './users.controller.service';

@Controller()
export class AppController {
  constructor(
    private readonly usersControllerService: UsersControllerService
  ) {}

  @Post('create')
  create(@Body() res: RequestUser): Promise<User> {
    return this.usersControllerService.create(res.message);
  }
}
