import { Injectable } from '@nestjs/common';
import { AbstractService } from '../abstract.service';
import { Board } from '../../interfaces/boads.interface';
import { Boards } from './boards.entity';

@Injectable()
export class BoardsService extends AbstractService<Board> {
  constructor() {
    super(Boards.name);
  }
}
