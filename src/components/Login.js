import React from 'react';
import { useState } from 'react';
import '../styles/Login.css';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { firebaseApp } from '../data/firebase';
import  {  useNavigate} from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = e => {
        e.preventDefault()

        //firebase signin
        const auth = getAuth(firebaseApp);
            signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if(auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //firebase register
        const auth = getAuth(firebaseApp);
            createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <div className="login_Container">
            <h1>Sign in</h1>

            <form>
                <h5>Email</h5>
                <input type="text" placeholder='Email' value={email} 
                onChange= {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" placeholder='Password' value={password}
                onChange= {e => setPassword(e.target.value)} />

                <button className='login_sign_btn' onClick={signin} >Sign In</button>

                <button className='login_register_btn'  onClick={register} >Create account</button> 
            </form>
        </div>
    </div>
  )
}

export default Login