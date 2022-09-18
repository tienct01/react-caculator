import React from "react";
import { addDigit } from "../../Caculator/actions";
import style from "./Button.module.css";

export interface DigitButtonProps {
	digit: string;
	dispatch: React.Dispatch<any>;
}

function DigitButton({ digit, dispatch }: DigitButtonProps) {
	return (
		<button
			className={style.button}
			onClick={() => dispatch(addDigit(digit))}>
			{digit}
		</button>
	);
}

export default DigitButton;
