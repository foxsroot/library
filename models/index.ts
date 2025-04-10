import { Sequelize } from "sequelize-typescript";
import { Book } from "./Book";
import { Author } from "./Author";

const config = require("../config/config.json");

const sequelize = new Sequelize({
    ...config.development,
    models: [Book, Author]
});

export { sequelize, Book, Author };
