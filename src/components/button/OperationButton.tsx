import React from "react";
import { chooseOperator } from "../../Caculator/actions";
import style from "./Button.module.css";

export interface OperationButtonProps {
	operator: string;
	dispatch: React.Dispatch<any>;
}

function OperationButton({ operator, dispatch }: OperationButtonProps) {
	return (
		<button
			className={style.button}
			onClick={() => dispatch(chooseOperator(operator))}>
			{operator}
		</button>
	);
}

export default OperationButton;
