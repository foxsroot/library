import express from 'express';
import * as bookController from '../controllers/bookController';
import { validateUUID } from '../middlewares/validateUUID';

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const books = await bookController.getAllBooks();
        res.status(200).json(books);
    } catch (e) {
        next(new Error("Internal Server Error"));
    }    
});

router.get("/:id", validateUUID('id'), async (req, res, next) => {
    try {
        const books = await bookController.getBookById(req.params.id);

        if (books) {
            res.status(200).json(books);
        } else {
            next(new Error("Can't find books with specified id"));
        }
    } catch (e) {
        next(new Error("Error when fetching book data"));
    }
});

export default router;