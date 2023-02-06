import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid"
import { User } from "./user.entity"

@Entity()
export class Contact{
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    number: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, {eager:true})
    user: User


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}