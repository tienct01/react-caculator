import { Reducer } from "react";
import { ACTIONS } from "./actions";

interface State {
    preOperand: number;
    operator: string;
    currentOperand: string;
}
export type Action = { 
    type: ACTIONS.ADD_DIGIT;
    payload: string;
} | {
    type: ACTIONS.CLEAR;
} | {
    type: ACTIONS.DELETE_DIGIT;
} | {
    type: ACTIONS.EVALUATE;
} | {
    type: ACTIONS.CHOOSE_OPERATOR;
    payload: string;
}
export enum OPERATORS {
    ADD = "+",
    SUB = "-",
    MULTIPLY = "*",
    DEVIDE = "/",
    EQUAL = "=",
    PERCENT = "%",
    NEGATIVE = "+/-"
}
export const initialState: State = {
    preOperand: 0,
    operator: "",
    currentOperand: "0"
}
function evaluateBinary({preOperand, operator, currentOperand}: State) {
    const curNum = parseFloat(currentOperand);
    if(curNum) {
        switch(operator) {
            case OPERATORS.ADD:
                return preOperand + curNum;
            case OPERATORS.SUB:
                return preOperand - curNum;
            case OPERATORS.DEVIDE:
                return preOperand / curNum;
            case OPERATORS.MULTIPLY:
                return preOperand * curNum;
            default: 
            throw new Error();
        }
    }
    return 0;
}
function evaluateUnary(currentOperand: string, operator: string) {
    const curNum = parseFloat(currentOperand);
    if(curNum) {
        switch(operator) {
            case OPERATORS.PERCENT: 
                return curNum/100;
            case OPERATORS.NEGATIVE:
                return -curNum;
            default:
                throw new Error();
        }
    }
    return 0;
}
export const reducer: Reducer<State, Action> = (prevState, action): State  => {
    switch(action.type) {
        case ACTIONS.ADD_DIGIT:
            let newOperand;
            let currentOperand = prevState.currentOperand;
            // Check digit
            if(currentOperand === "0") {
                if(action.payload === "0") {
                    newOperand = "0";
                }
                else if(action.payload === ".") {
                    newOperand = "0."
                }
                else {
                    newOperand = `${action.payload}`
                }
            }
            else if(currentOperand.includes(".") && action.payload === ".") {
                newOperand = currentOperand;
            }
            else {
                if(currentOperand.length > 16) {
                    newOperand = `${currentOperand.slice(1)}${action.payload}`
                }
                else {
                    newOperand = `${currentOperand}${action.payload}`;
                }
            }
            return {
                preOperand: prevState.preOperand,
                operator: prevState.operator,
                currentOperand: newOperand
            }
        case ACTIONS.CLEAR:
            return {
                preOperand: 0,
                operator: "",
                currentOperand: "0"
            }
        case ACTIONS.DELETE_DIGIT:
            let newVal;
            if(prevState.currentOperand.length === 1) {
                newVal = "0";
            }
            else {
                newVal = `${prevState.currentOperand.slice(0, -1)}`;
            }
            return {
                preOperand: prevState.preOperand,
                operator: prevState.operator,
                currentOperand: newVal
            }
        case ACTIONS.EVALUATE:
            let newValue;
            if(prevState.operator === "") {
                newValue = parseFloat(prevState.currentOperand);
            }
            else {
                newValue = evaluateBinary(prevState);
            }
            return {
                preOperand: newValue,
                operator: "",
                currentOperand: newValue.toString()
            }
        case ACTIONS.CHOOSE_OPERATOR: 
            let preOperand, operator, curOperand;
            if(action.payload === OPERATORS.PERCENT || action.payload === OPERATORS.NEGATIVE) {
                preOperand = evaluateUnary(prevState.currentOperand, action.payload);
                operator = "";
                curOperand = preOperand.toString();
            }
            else {
                preOperand = parseFloat(prevState.currentOperand);
                operator = action.payload;
                curOperand = "0";
            }
            return {
                preOperand: preOperand,
                operator: operator,
                currentOperand: curOperand
            }
        default:
            throw new Error("");
    }
}