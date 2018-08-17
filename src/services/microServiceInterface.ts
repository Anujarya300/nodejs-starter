import { MicroServiceEnum } from "../utils/enums";
import { IError } from "../interfaces/error";

export interface IMicroService {
    provider: MicroServiceEnum;
}