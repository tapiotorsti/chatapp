import React from "react";
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js';
import {Button} from '@material-ui/core';

function SignIn() {
    function SignInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <div>
            <Button onClick={SignInWithGoogle}>Sign in with Google</Button>
        </div>
    )
}

export default SignIn;