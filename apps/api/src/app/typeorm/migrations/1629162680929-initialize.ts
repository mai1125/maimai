import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../../interfaces/users.interface';
import { Users } from '../entities';

export class initialize1628945062013 implements MigrationInterface {
  name = 'initialize1628945062013';

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (process.env.NODE_ENV === 'development') {
      // ユーザーを初期登録するパラメータを作る
      const accounts: User[] = [
        {
          comment: 'こんにちは',
        },
      ];
      // 実際にここでDBへsaveを走らせる
      await queryRunner.manager.save(Users, accounts);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`demo\`.\`users\``);
  }
}