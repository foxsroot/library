import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: "authors",
    timestamps: false
})

export class Author extends Model {
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
        type: DataType.DATE,
        field: "date_of_birth",
        allowNull: true
    })
    declare dateOfBirth: Date;
}