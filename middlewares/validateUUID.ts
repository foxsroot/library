import { Request, Response, NextFunction } from 'express';
import validator from 'validator';
import { ApiError } from '../utils/ApiError';

export const validateUUID = (param: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const id = req.params[param];
        if (!validator.isUUID(id)) {
            return next(new ApiError(400, "Invalid ID format"));
        }
        next();
    };
}