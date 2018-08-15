import { Request, Response } from 'express';
import * as utils from './commonHelpers';
import Q = require('q');

export class HTTPResponse {

    static send(req: Request, res: Response, resData: any, statusCode: number = 200) {
        if (utils.isPromise(resData)) {
            return (<Q.Promise<any>>resData).then(result => {
                return res.status(statusCode).send(resData);
            })
        }
        res.status(statusCode).send(resData);
    }

    static sendError(req: Request, res: Response, error: any, statusCode: number = 500) {
        res.status(statusCode).send(error);
    }
}