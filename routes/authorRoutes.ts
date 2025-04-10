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
            next(new ApiError(404, "Can't find author with specified ID"));
        }
    } catch (e) {
        next(new Error("Failed to fetch author data"));
    }
});

router.post("/", async (req, res, next) => {
    const { name, dateOfBirth } = req.body;

    if (!name) {
        return next(new ApiError(400, "Name must be specified"));
    }

    try {
        const author = await authorController.postAuthor(name, dateOfBirth);
        res.status(200).json(author);
    } catch (e) {
        next(new ApiError(500, "Failed to post author data"));
    }
});

router.delete("/:id", validateUUID('id'), async (req, res, next) => {
    try {
        const affectedRow = await authorController.deleteAuthor(req.params.id);

        if (affectedRow) {
            res.status(200).json("Successfully deleted Author with id " + req.params.id);
        } else {
            next(new ApiError(500, "Failed to find Author with specified ID"));
        }
    } catch(e) {
        next(new ApiError(500, "Failed to delete Author"));
    }
});

router.put("/:id", validateUUID('id'), async (req, res, next) => {
    const { name, dateOfBirth } = req.body;

    if (!name || !dateOfBirth) {
        return next(new ApiError(400, "Name must be specified"))
    }

    try {
        const author = await authorController.updateAuthor(req.params.id, name, dateOfBirth);

        if (author) {
            res.status(200).json(author);
        } else {
            next(new ApiError(404, "Failed to find Author with specified ID"));
        }
    } catch (e) {
        next(new ApiError(500, "Failed to update Author data"));
    }
});

export default router;
