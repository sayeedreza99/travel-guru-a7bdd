import React, { useState, useContext } from 'react';

import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { initializeLoggInFrameWork, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPasswird, signInWithEmailAndPassword } from './LoginManager';
import './LogIn.css'
import { Link } from 'react-router-dom';


function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        siSignedIn: false,
        name: '',
        photoURL: '',
        email: '',
    })

    initializeLoggInFrameWork();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false)
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);

        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (event) => {
        // console.log(user.email, user.password)
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPasswird(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                })

        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                })
        }
        event.preventDefault();
    }

    return (
        <div style={{ textAlign: 'center' }}>

            <div className='logIn-form'>
                <h1 style={{ color: 'white' }}>Already signed up !</h1>
                <form onSubmit={handleSubmit}>
                    {newUser && <input className="input-box" name='name' type="text" onBlur={handleBlur} placeholder='your name' />}
                    <br />
                    <input className="input-box" type="text" name="email" onBlur={handleBlur} placeholder="your email address" required />
                    <br />
                    <input className="input-box" type="password" onBlur={handleBlur} name="password" placeholder="your password" required />
                    <br />
                    <input className="input-sign" type="submit" value={newUser ? 'Sign Up' : 'Sign in'} />
                </form>
                <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
                <span style={{ color: 'white' }}>Don't have an account? <Link to="/SignUP" style={{ color: 'white' }} >Create an account</Link> </span>
            </div>

            <div className='ggfb-form'>
                {user.isSignedIn ? <button onClick={signOut}>Sign out </button> : <button onClick={googleSignIn}>Sign in using Gmail </button>}
                <br />
                <button onClick={fbSignIn}>Log in Using facebook</button>
                {
                    user.siSignedIn && <div>
                        <p>Welcome {user.name}</p>
                        <p>your email:{user.email}</p>
                        <img src={user.photo} alt="" />
                    </div>
                }
            </div>

        </div>
    );
}
export default Login;