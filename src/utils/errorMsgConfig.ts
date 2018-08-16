import { MicroServiceEnum } from "./enums";

export interface IErrorMsgConfig {
    [key: string]: string | Object;
}

const BankNodeErrorMsg: IErrorMsgConfig = {
    500: "Sever crash",
    "ECONNREFUSED": "Bank node micro service is down. Please try after some time."
}

const SawtoothWrapperErrorMsg: IErrorMsgConfig = {
    500: "Sever error Sawtooth Wrapper"
}

const errorMsgConfig: IErrorMsgConfig = {
    [MicroServiceEnum.BANK_NODE]: BankNodeErrorMsg,
    [MicroServiceEnum.SAWTOOTH_CLIENT]: SawtoothWrapperErrorMsg
}

export default errorMsgConfig;
