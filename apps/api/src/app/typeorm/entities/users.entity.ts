import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../interfaces/users.interface';

@Entity()
export class Users implements User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  comment: string;
}
