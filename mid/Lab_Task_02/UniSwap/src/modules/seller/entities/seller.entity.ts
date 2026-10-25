import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "sellers"})
export class Seller{

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    sellerName!: string;

    @Column()
    sellerEmail!: string;

    @Column()
    sellerPassword!: string;

    @Column()
    sellerPhone!: string;

    @Column()
    sellerAddress?: string;

}