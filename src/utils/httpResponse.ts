import { Request, Response } from 'express';
import * as utils from './commonHelpers';
import Q = require('q');
import { MicroServiceEnum } from './enums';
import { IError } from '../interfaces/error';
import errorMsgConfig from './errorMsgConfig';

export class HTTPResponse {

    static send(req: Request, res: Response, resData: any, statusCode: number = 200) {
        if (utils.isPromise(resData)) {
            return (<Q.Promise<any>>resData).then(result => {
                return res.status(statusCode).send(resData);
            }).catch(exc => {
                this.sendError(req, res, this.buildErrorMsg(500, MicroServiceEnum.SAWTOOTH_CLIENT));
            })
        }
        res.status(statusCode).send(resData);
    }

    static sendError(req: Request, res: Response, error: IError, statusCode: number = 500) {
        res.status(statusCode).send(error);
    }

    static buildErrorMsg(errorCode: any, provider?: MicroServiceEnum): IError {
        provider = provider || MicroServiceEnum.SAWTOOTH_CLIENT;
        let errorConfig = errorMsgConfig[provider];
        let errMsg = errorConfig[errorCode];
        let errorObj: IError = {
            errorCode,
            error: errMsg,
            originatedFrom: MicroServiceEnum[provider]
        };
        return errorObj;
    }
}