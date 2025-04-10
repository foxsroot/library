import { Book, sequelize } from '../models/index';

async function getAllBooks() {
    sequelize.sync();
    const books = await Book.findAll();

    return books;
}

async function getBookById(bookId: string) {
    sequelize.sync();
    const books = await Book.findByPk(bookId);

    return books;
}

export default { getAllBooks, getBookById };