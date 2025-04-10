import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export const authenticator = (username: string, password: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        
    }
}