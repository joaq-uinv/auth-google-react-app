import React from "react";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";

function App() {
	const responseGoogle = (response) => {
		console.log(response);
	};
	return (
		<div className="App">
			<header className="App-header">
				Login with Google Sign-In
				<GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
			</header>
		</div>
	);
}

export default App;
