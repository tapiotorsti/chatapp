import React from 'react';
import {auth} from './../firebase.js';
import {Button} from '@material-ui/core';

function SignOut() {

    return(

        <div>
            <Button onClick ={ () => auth.signOut()}> Sign out</Button>
        </div>

    );
}

export default SignOut;