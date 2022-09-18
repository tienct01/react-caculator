import style from "./Screen.module.css";

interface ScreenProps {
	calculation: string;
	current: string;
}
function Screen({ calculation, current }: ScreenProps) {
	return (
		<div className={style.screen}>
			<div className={style.line1}>{calculation}</div>
			<div className={style.result}>{current}</div>
		</div>
	);
}
export default Screen;
