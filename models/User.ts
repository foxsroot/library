import { Table, Model, Column, DataType } from 'sequelize-typescript';

export type Role = "admin" | "user";

@Table({
    tableName: "users",
    timestamps: false
})

export class User extends Model {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataType.UUIDV4
    })    
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare password: string;

    @Column({
        type: DataType.ENUM("admin", "user"),
        allowNull: false,
        defaultValue: "admin"
    })
    declare role: Role;
}