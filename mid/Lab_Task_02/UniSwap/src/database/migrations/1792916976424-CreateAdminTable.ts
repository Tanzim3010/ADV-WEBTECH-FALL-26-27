import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdminTable1792916976424 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "admins",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "adminName",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "adminEmail",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "adminPassword",
                        type: "varchar",
                        isNullable: false,
                    },
                    
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("admins");
    }

}
