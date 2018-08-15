
export function isPromise(object: any) {
    if (object && (object['then'] instanceof Function || object['promiseDispatch'] instanceof Function))
        return true;
    return false;
}