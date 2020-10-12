import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialDBSetup1602531896089 implements MigrationInterface {
    name = 'InitialDBSetup1602531896089'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TYPE "wallet_transactions_transactiontype_enum" AS ENUM(\'income\', \'expense\')')
      await queryRunner.query('CREATE TABLE "wallet_transactions" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "label" character varying NOT NULL, "value" integer NOT NULL, "transactionType" "wallet_transactions_transactiontype_enum" NOT NULL, "walletId" integer, CONSTRAINT "PK_5120f131bde2cda940ec1a621db" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "wallets" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "personId" integer, CONSTRAINT "REL_521d43f5ca2fbd11945d66334e" UNIQUE ("personId"), CONSTRAINT "PK_8402e5df5a30a229380e83e4f7e" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "people" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b" PRIMARY KEY ("id"))')
      await queryRunner.query('ALTER TABLE "wallet_transactions" ADD CONSTRAINT "FK_8a94d9d61a2b05123710b325fbf" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
      await queryRunner.query('ALTER TABLE "wallets" ADD CONSTRAINT "FK_521d43f5ca2fbd11945d66334e6" FOREIGN KEY ("personId") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "wallets" DROP CONSTRAINT "FK_521d43f5ca2fbd11945d66334e6"')
      await queryRunner.query('ALTER TABLE "wallet_transactions" DROP CONSTRAINT "FK_8a94d9d61a2b05123710b325fbf"')
      await queryRunner.query('DROP TABLE "people"')
      await queryRunner.query('DROP TABLE "wallets"')
      await queryRunner.query('DROP TABLE "wallet_transactions"')
      await queryRunner.query('DROP TYPE "wallet_transactions_transactiontype_enum"')
    }
}
