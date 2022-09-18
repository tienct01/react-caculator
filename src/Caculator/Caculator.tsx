import React, { useReducer } from "react";
import ClearButton from "../components/button/ClearButton";
import DeleteButton from "../components/button/DeleteButton";
import DigitButton from "../components/button/DigitButton";
import EqualButton from "../components/button/EqualButton";
import OperationButton from "../components/button/OperationButton";
import { Screen } from "../components/screen";
import style from "./Caculator.module.css";
import { initialState, reducer, OPERATORS } from "./reducer";

function Caculator() {
	const [{ preOperand, operator, currentOperand }, dispatch] = useReducer(
		reducer,
		initialState
	);
	return (
		<div className={style.caculator}>
			<Screen
				calculation={preOperand + operator}
				current={currentOperand}
			/>
			<DeleteButton operator="X" dispatch={dispatch} />
			<OperationButton operator={OPERATORS.PERCENT} dispatch={dispatch} />
			<ClearButton operator="C" dispatch={dispatch} />
			<OperationButton operator={OPERATORS.DEVIDE} dispatch={dispatch} />
			<DigitButton digit="7" dispatch={dispatch} />
			<DigitButton digit="8" dispatch={dispatch} />
			<DigitButton digit="9" dispatch={dispatch} />
			<OperationButton
				operator={OPERATORS.MULTIPLY}
				dispatch={dispatch}
			/>
			<DigitButton digit="4" dispatch={dispatch} />
			<DigitButton digit="5" dispatch={dispatch} />
			<DigitButton digit="6" dispatch={dispatch} />
			<OperationButton operator={OPERATORS.SUB} dispatch={dispatch} />
			<DigitButton digit="1" dispatch={dispatch} />
			<DigitButton digit="2" dispatch={dispatch} />
			<DigitButton digit="3" dispatch={dispatch} />
			<OperationButton operator={OPERATORS.ADD} dispatch={dispatch} />
			<OperationButton
				operator={OPERATORS.NEGATIVE}
				dispatch={dispatch}
			/>
			<DigitButton digit="0" dispatch={dispatch} />
			<DigitButton digit="." dispatch={dispatch} />
			<EqualButton dispatch={dispatch} />
		</div>
	);
}
export default Caculator;
