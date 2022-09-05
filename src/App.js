import React from "react";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  const responseGoogle = async (response) => {
    console.log("Google response:", response);
    try {
      const serverResponse = await fetch(
        "http://localhost:80/api/v1/auth/google",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ id_token: response.credential }),
        }
      );
      console.log("Respuesta del servidor", await serverResponse.json());
    } catch (e) {
      console.log("Hubo un error al ingresar (SERVER_ERROR)");
    }
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
