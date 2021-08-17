import { Controller, Get } from '@nestjs/common';
import { User } from './interfaces/users.interface';
import { UsersControllerService } from './users.controller.service';

@Controller()
export class AppController {
  constructor(
    private readonly usersControllerService: UsersControllerService
  ) {}

  @Get('create')
  create(): Promise<User> {
    return this.usersControllerService.create();
  }
}
