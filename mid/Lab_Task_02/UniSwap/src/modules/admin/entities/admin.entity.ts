import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "admins"})
export class Admin{

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    adminName!: string;

    @Column()
    adminEmail!: string;

    @Column()
    adminPassword!: string;

}