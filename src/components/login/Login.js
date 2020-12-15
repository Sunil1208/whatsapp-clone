import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';

function Login() {

    const signIn = () => {
        alert('Sign in.')
    }
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src=""
                    alt=""
                />

                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button
                    variant="contained" 
                    color="primary"
                    onClick={signIn}   
                >Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
