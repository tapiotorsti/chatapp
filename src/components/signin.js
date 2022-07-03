import React from "react";
import {auth, provider} from '../firebase.js';
import {Button} from '@material-ui/core';

function SignIn() {

    // Sign in with google
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
      
    return (
        <div>
           <Button onClick = {signin}>Sign in with Google</Button>
        </div>
    );

}
export default SignIn;