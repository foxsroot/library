import { Book, sequelize } from '../models/index';

async function insertBooks() {
    await sequelize.sync();

    await Book.bulkCreate([
        {
            name: 'Harry Potter and the Sorcerer\'s Stone',
            pages: 309,
            publishedDate: new Date('1997-06-26'),
            genre: 'fantasy',
            authorId: '9e71a758-1e3e-4372-bc4e-acaeaf0e8dde' // J.K. Rowling
        },
        {
            name: 'A Game of Thrones',
            pages: 694,
            publishedDate: new Date('1996-08-06'),
            genre: 'fantasy',
            authorId: 'a2cc64fc-da75-4be7-a91b-52d9f92fd495' // George R.R. Martin
        },
        {
            name: 'Norwegian Wood',
            pages: 296,
            publishedDate: new Date('1987-09-04'),
            genre: 'romance',
            authorId: '747fba46-912c-41cc-b98d-3e0ae3f72510' // Haruki Murakami
        },
        {
            name: 'Murder on the Orient Express',
            pages: 256,
            publishedDate: new Date('1934-01-01'),
            genre: 'horror',
            authorId: '1f14ac96-2406-4885-a15d-a078174a6160' // Agatha Christie
        }
    ])
}

insertBooks();