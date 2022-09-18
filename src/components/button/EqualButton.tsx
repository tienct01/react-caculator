import React from "react";
import { chooseOperator, evaluate } from "../../Caculator/actions";
import style from "./Button.module.css";

export interface EqualButtonProps {
	dispatch: React.Dispatch<any>;
}

function EqualButton({ dispatch }: EqualButtonProps) {
	return (
		<button
			className={style.button}
			onClick={() => {
				dispatch(evaluate());
			}}>
			{"="}
		</button>
	);
}

export default EqualButton;
