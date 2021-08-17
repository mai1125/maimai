import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../interfaces/users.interface';

@Entity()
export class Users implements User {
  @PrimaryGeneratedColumn()
  comment: string;
}
