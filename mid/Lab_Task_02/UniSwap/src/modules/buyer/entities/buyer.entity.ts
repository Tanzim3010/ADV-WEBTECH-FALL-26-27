import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "buyers"})
export class Buyer{

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    buyerName!: string;

    @Column()
    buyerEmail!: string;

    @Column()
    buyerPassword!: string;

    @Column()
    buyerPhone!: string;

    @Column()
    buyerAddress?: string;

}