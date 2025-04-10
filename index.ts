import express, { json, Request, Response, NextFunction } from "express";
import { sequelize, Book, Author} from "./models/index";
import * as bookController from './controllers/bookController';
import * as authorController from './controllers/bookController';
import { validateUUID } from './middlewares/validateUUID';

const config = require("./config/config.json");
const app = express();

app.use(json());

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Welcome to our library System"
    });

    next();
});

app.get("/books", async (req, res, next) => {
    try {
        const result = await bookController.default.getAllBooks();
        res.status(200).json(result);
    } catch (e) {
        next(new Error("Internal Server Error"));
        return;
    }    
});

app.get("/books/:id", async (req, res, next) => {
    try {
        const result = await bookController.default.getBookById(req.params.id);
    } catch (e) {
        next(new Error("Book not found"));
        return;
    }
});

app.post("/books", (req, res, next) => {

});


app.get("/authors", (req, res, next) => {

});

app.get("/authors/:id", (req, res, next) => {

});

app.listen(3000, () => {
    console.log("App started at port 3000")
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        message: err.message
    });
})

