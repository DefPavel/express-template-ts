import { Request, Response, NextFunction } from "express";

export const getTitle = (req: Request, res: Response): void => {
    res.send('Express + TypeScript Server');
};


export const getTitleHome = (req: Request, res: Response): void => {
    res.send('Welcome Home');
};