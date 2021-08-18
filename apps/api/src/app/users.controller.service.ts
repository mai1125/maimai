import { Injectable } from '@nestjs/common';
import { UsersService } from './typeorm/entities/users.service';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersControllerService {
  constructor(private readonly usersService: UsersService) {}

  /**
   * データ作成(Create)
   */
  async create(value: string): Promise<User> {
    const newUser: User = {
      comment: value,
    };
    return this.usersService.create(newUser);
  }
}
