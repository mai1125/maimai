import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from '../../interfaces/boads.interface';

@Entity()
export class Boards implements Board {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  comment: string;

  @Column()
  name: string;
}
