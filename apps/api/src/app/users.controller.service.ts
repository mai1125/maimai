import { Injectable } from '@nestjs/common';
import { UsersService } from './typeorm/entities/users.service';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersControllerService {
  constructor(private readonly usersService: UsersService) {}

  /**
   * データ作成(Create)
   */
  async create(): Promise<User> {
    const target = 'メッセージ';
    const newUser: User = {
      comment: target,
    };
    return this.usersService.create(newUser);
  }
}
