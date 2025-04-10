import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

export const validateUUID = (param: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const id = req.params[param];
        if (!validator.isUUID(id)) {
            return next(new Error("Invalid ID format"));
        }
        next();
    };
}