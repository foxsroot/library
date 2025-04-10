import { Sequelize } from "sequelize-typescript";
import { Book } from "./Book";
import { Author } from "./Author";
import { User } from "./User";

const config = require("../config/config.json");

const sequelize = new Sequelize({
    ...config.development,
    models: [Book, Author, User]
});

export { sequelize, Book, Author, User };
