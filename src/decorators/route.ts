import { HTTPResponse } from "../utils/httpResponse";

import Q = require('q');
import * as utils from '../utils/commonHelpers';

export function route(params: any): any {
    params = params || <any>{};
    console.log(
        params
    )
    return function (target: Function, propertyKey: string, descriptor: any) {
        var originalMethod = descriptor.value;
        
        let fn = function () {
            let args = Array.prototype.slice.call(arguments);
            let req = args[0];
            let res = args[1];
            let next = args[2];
            let retVal = originalMethod.call(this, req.params.id);
            if (utils.isPromise(retVal)) {
                return (<Q.Promise<any>>retVal).then(result => {
                    return HTTPResponse.send(req, res, result, 200);
                })
            }
            return HTTPResponse.send(req, res, retVal, 200);
        }

        descriptor.value = fn;
        (<any>target.constructor).router.get(params.path, fn);
    }
}

