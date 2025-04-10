import { Book } from '../models/index';
import { Op } from 'sequelize';

async function getAllBooks() {
    const books = await Book.findAll();

    return books;
}

async function getBookById(bookId: string) {
    const books = await Book.findByPk(bookId);

    return books;
}

export { getAllBooks, getBookById };