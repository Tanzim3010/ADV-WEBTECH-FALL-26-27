import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSellerTable1792916996985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.createTable(
                    new Table({
                        name: "sellers",
                        columns: [
                            {
                                name: "id",
                                type: "uuid",
                                isPrimary: true,
                                generationStrategy: "uuid",
                                default: "uuid_generate_v4()",
                            },
                            {
                                name: "name",
                                type: "varchar",
                                isNullable: false,
                            },
                            {
                                name: "email",
                                type: "varchar",
                                isNullable: false,
                            },
                            {
                                name: "password",
                                type: "varchar",
                                isNullable: false,
                            },
                            {
                                name: "phone",
                                type: "varchar",
                                isNullable: false,
                            },
                            {
                                name: "address",
                                type: "varchar",
                                isNullable: true,
                            },
                            
                        ],
                    })
                );
            }
        
            public async down(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.dropTable("sellers");
            }

}
