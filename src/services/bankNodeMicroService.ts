import { IMicroService } from "./microServiceInterface";
import { MicroServiceEnum } from "../utils/enums";
import axios from 'axios';
import Q = require('q');
import { HTTPResponse } from "../utils/httpResponse";

export class BankNodeMS implements IMicroService {
    provider = MicroServiceEnum.BANK_NODE;

    public getData() {
        return axios.get("http://localhost:2000/api/data").then(result => {
            return result;
        }).catch(exc => {
            return Q.reject(HTTPResponse.buildErrorMsg(exc.code, this.provider));
        })
    }
}