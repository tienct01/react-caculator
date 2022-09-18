import React, { Children } from "react";
import "./App.css";

interface AppProps {
	children?: React.ReactNode;
}
function App({ children }: AppProps) {
	return (
		<div className="App">
			<h1 className="hCaculator">CACULATOR</h1>
			{children}
		</div>
	);
}

export default App;
