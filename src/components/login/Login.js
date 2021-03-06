import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../stateManagement/StateProvider';
import { actiontypes } from '../stateManagement/reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actiontypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png"
                    alt="whatsapp_logo"
                    className="whatsapp_logo"
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
