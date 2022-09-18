import { Action } from "./reducer";

export enum ACTIONS {
    ADD_DIGIT = "add-digit",
    CLEAR = "clear",
    DELETE_DIGIT = "del-digit",
    EVALUATE = "evaluate",
    CHOOSE_OPERATOR = "choose-operator"
}

export function addDigit(digit: string): Action {
    return {
        type: ACTIONS.ADD_DIGIT,
        payload: digit
    }
}

export function clear(): Action {
    return {
        type: ACTIONS.CLEAR
    }
}
export function delDigit(): Action {
    return {
        type: ACTIONS.DELETE_DIGIT
    }
}
export function evaluate(): Action {
    return {
        type: ACTIONS.EVALUATE
    }
}
export function chooseOperator(operator: string): Action {
    return {
        type: ACTIONS.CHOOSE_OPERATOR,
        payload: operator
    }
}