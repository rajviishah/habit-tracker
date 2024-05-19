import React from 'react';
import GoogleLoginButton from './components/GoogleLoginButton';

function App() {
    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login successful:', response);
        // Handle successful login, e.g., send token to backend
    };

    const handleGoogleLoginFailure = (error) => {
        console.error('Google login failed:', error);
        // Handle failed login
    };

    return (
        <div className="App">
            <h1>Google Sign-In Example</h1>
            <GoogleLoginButton
                onSuccess={handleGoogleLoginSuccess}
                onFailure={handleGoogleLoginFailure}
            />
        </div>
    );
}

export default App;
