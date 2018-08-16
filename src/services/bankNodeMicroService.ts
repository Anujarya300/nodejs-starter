import { IMicroService } from "./microServiceInterface";
import { MicroServiceEnum } from "../utils/enums";
import axios from 'axios';
import Q = require('q');
import { HTTPResponse } from "../utils/httpResponse";
import errorMsgConfig from '../utils/errorMsgConfig';
import { IError } from "../interfaces/error";

export class BankNodeMS implements IMicroService {
    provider = MicroServiceEnum.BANK_NODE;

    public getData() {
        return axios.get("http://localhost:2000/api/data").then(result => {
            return result;
        }).catch(exc => {
            return Q.reject(this.buildErrorMsg(exc));
        })
    }

    public buildErrorMsg(exc: any) {
        let errorConfig = errorMsgConfig[this.provider];
        let errMsg = errorConfig[exc.code];
        return HTTPResponse.buildErrorMsg(this.provider, errMsg, exc.code);
    }
}