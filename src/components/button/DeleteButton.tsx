import React from "react";
import { delDigit } from "../../Caculator/actions";
import style from "./Button.module.css";

export interface DeleteButtonProps {
	operator: "X";
	dispatch: React.Dispatch<any>;
}

function DeleteButton({ operator, dispatch }: DeleteButtonProps) {
	return (
		<button className={style.button} onClick={() => dispatch(delDigit())}>
			{operator}
		</button>
	);
}

export default DeleteButton;
