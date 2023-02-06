import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid"
import { Contact } from "./contact.entity";

@Entity()

export class User {
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    number: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Contact, contacts => contacts.user)
    contacts: Contact[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
    