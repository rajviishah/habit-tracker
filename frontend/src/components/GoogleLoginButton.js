import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
    const clientId = '58396555579-utne43buv9j3ubpbjmqulu04leel3uda.apps.googleusercontent.com'; // Replace with your actual client ID

    const onSuccessHandler = (response) => {
        onSuccess(response);
    };

    const onFailureHandler = (error) => {
        onFailure(error);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccessHandler}
                onFailure={onFailureHandler}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default GoogleLoginButton;
