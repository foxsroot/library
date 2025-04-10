import { Author } from '../models/index';

async function getAllAuthors() {
    const authors = await Author.findAll();

    return authors;
}

async function getAuthorById(id: string) {
    const author = await Author.findByPk(id);

    return author;
}

async function postAuthor(name: string, dateOfBirth: Date) {
    const author = await Author.create({
        name,
        dateOfBirth
    });

    return author;
}

async function deleteAuthor(id: string) {
    const author = await Author.destroy({where: { id }});
    return author;
}

async function updateAuthor(id: string, name: string, dateOfBirth: Date) {
    const author = await Author.update({
        name,
        dateOfBirth
    },{ where: { id } });

    return author;
}

export { getAllAuthors, getAuthorById, postAuthor, deleteAuthor, updateAuthor };