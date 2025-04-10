import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Author } from "./Author";

export type Genre = 'fantasy' | 'science' | 'romance' | 'horror' | 'history';

@Table({
    tableName: "books",
    timestamps: false
})

export class Book extends Model {
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
        type: DataType.INTEGER,
        allowNull: false
    })
    declare pages: number;

    @Column({
        type: DataType.DATE,
        field: "published_date",
        allowNull: false
    })
    declare publishedDate: Date;

    @Column({
        type: DataType.ENUM('fantasy', 'science', 'romance', 'horror', 'history'),
        allowNull: false
    })
    declare genre: Genre;

    @ForeignKey(() => Author)
    @Column({
        type: DataType.UUID,
        field: "author_id",
        allowNull: false
    })
    declare authorId: string;

    @BelongsTo(() => Author)
    declare author: Author;
}
