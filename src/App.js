import React from 'react';
import './App.css';
import { GoogleLogin } from 'react-google-login';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <header className="App-header">
        Login with Google Sign-In
        <GoogleLogin
          clientId={process.env.REACT_APP_WEB_CLIENT_ID || ''}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default App;
