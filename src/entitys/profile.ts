import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne} from "typeorm";
import { User } from "./user";

@Entity()
export class Profile extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: string;

    @Column()
    photo: string;

    @OneToOne(type => User, user => user.profile) // specify inverse side as a second parameter
    user: User;
}