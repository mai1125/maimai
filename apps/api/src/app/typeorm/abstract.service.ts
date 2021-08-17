import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';

abstract class AbstractInterface {
  constructor(entity: Partial<AbstractInterface>) {
    Object.assign(this, entity);
  }
}

@Injectable()
export abstract class AbstractService<Entity extends AbstractInterface> {
  constructor(private entityName: string) {}

  /**
   * データ作成(Create)
   */
  create(params?: Entity): Promise<Entity> {
    return getRepository<Entity>(this.entityName).save(params);
  }
}
