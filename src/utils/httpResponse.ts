import { Request, Response } from 'express';
import * as utils from './commonHelpers';
import Q = require('q');
import { MicroServiceEnum } from './enums';
import { IError } from '../interfaces/error';

export class HTTPResponse {

    static send(req: Request, res: Response, resData: any, statusCode: number = 200) {
        if (utils.isPromise(resData)) {
            return (<Q.Promise<any>>resData).then(result => {
                return res.status(statusCode).send(resData);
            }).catch(exc => {
                this.sendError(req, res, this.buildErrorMsg(MicroServiceEnum.SAWTOOTH_CLIENT, exc));
            })
        }
        res.status(statusCode).send(resData);
    }

    static sendError(req: Request, res: Response, error: any, statusCode: number = 500) {
        res.status(statusCode).send(error);
    }

    static buildErrorMsg(provider: MicroServiceEnum, error: any, errorCode?: number) {
        let errorObj: IError = {
            errorCode,
            error,
            originatedFrom: MicroServiceEnum[provider]
        };
        return errorObj;
    }
}