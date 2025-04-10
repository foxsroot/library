import { Author, sequelize } from '../models/index';

async function getAllAuthors() {
    const authors = await Author.findAll();

    return authors;
}

async function getAuthorById(id: string) {
    const author = await Author.findByPk(id);

    return author;
}

export { getAllAuthors, getAuthorById };