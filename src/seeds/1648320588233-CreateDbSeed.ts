import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTags1648320588233 implements MigrationInterface {
  name = 'CreateTags1648320588233';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags VALUES ('coffe'), ('dragons'), ('some')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tags"`);
  }
}
