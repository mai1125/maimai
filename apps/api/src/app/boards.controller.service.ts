import { Injectable } from '@nestjs/common';
import { BoardsService } from './typeorm/entities/boards.service';
import { Board } from './interfaces/boads.interface';

@Injectable()
export class BoardsControllerService {
  constructor(private readonly boadsService: BoardsService) {}

  /**
   * データ作成(Create)
   */
  async create(value: string): Promise<Board> {
    const newComment: Board = {
      comment: value,
      name: value,
    };
    return this.boadsService.create(newComment);
  }
}
