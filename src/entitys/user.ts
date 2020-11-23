import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { Profile } from "../entitys/profile";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(typ => Profile, profile => profile.user)
    @JoinColumn()
    profile: Profile

}