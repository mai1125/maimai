import { Injectable } from '@nestjs/common';
import { AbstractService } from '../abstract.service';
import { User } from '../../interfaces/users.interface';
import { Users } from './users.entity';

@Injectable()
export class UsersService extends AbstractService<User> {
  constructor() {
    super(Users.name);
  }
}
