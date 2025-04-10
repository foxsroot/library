import express from 'express';
import * as authorController from '../controllers/authorController';
import { validateUUID } from '../middlewares/validateUUID';
import { ApiError } from '../utils/ApiError';

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const authors = await authorController.getAllAuthors();
        res.status(200).json(authors);
    } catch (e) {
        next(new Error("Failed to fetch authors data"));
    }
})

router.get("/:id", validateUUID('id'), async (req, res, next) => {
    try {
        const author = await authorController.getAuthorById(req.params.id);

        if (author) {
            res.status(200).json(author);
        } else {
            next(new ApiError(404, "Can't find book with specified ID"));
        }
    } catch (e) {
        next(new Error("Failed to fetch author data"));
    }
});

export default router;
