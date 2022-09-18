import React from "react";
import { clear } from "../../Caculator/actions";
import style from "./Button.module.css";

export interface ClearButtonProps {
	operator: "C";
	dispatch: React.Dispatch<any>;
}

function ClearButton({ operator, dispatch }: ClearButtonProps) {
	return (
		<button className={style.button} onClick={() => dispatch(clear())}>
			{operator}
		</button>
	);
}

export default ClearButton;
