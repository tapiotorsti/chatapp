import './app.css';
import Chat from './components/chat.js';
import SignIn from './components/signin.js';
import {auth} from './firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';

function App() {

    const [user] = useAuthState(auth);
    return (
        user ? <Chat/> : <SignIn/>
    );
}

export default App;