import { sequelize, Book, Author } from './models/index';

async function insertAuthors() {
    await sequelize.sync();

    await Author.bulkCreate([
        {
            name: 'J.K. Rowling',
            dateOfBirth: new Date('1965-07-31')
        },
        {
            name: 'George R.R. Martin',
            dateOfBirth: new Date('1948-09-20')
        },
        {
            name: 'Haruki Murakami',
            dateOfBirth: new Date('1949-01-12')
        },
        {
            name: 'Agatha Christie',
            dateOfBirth: new Date('1890-09-15')
        }
    ])
}

insertAuthors();
