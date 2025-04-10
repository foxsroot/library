import { Book, sequelize } from '../models/index';

async function getAllBooks() {
    const books = await Book.findAll();

    return books;
}

async function getBookById(bookId: string) {
    const books = await Book.findByPk(bookId);

    return books;
}

export { getAllBooks, getBookById };