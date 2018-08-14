import { Request, Response } from 'express';

export class HTTPResponse {

    static send(req: Request, res: Response, resData: any, statusCode: number = 200) {
        res.status(statusCode).send(resData);
    }

    static sendError(req: Request, res: Response, error: any, statusCode: number = 500) {
        res.status(statusCode).send(error);
    }
}