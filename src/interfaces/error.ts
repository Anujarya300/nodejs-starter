import { MicroServiceEnum } from "../utils/enums";

export interface IError {
    originatedFrom: string;
    errorCode: number;
    error: string;
}