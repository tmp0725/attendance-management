import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './Firebase';
import Button from '@material-ui/core/Button';
import * as AiIcons from "react-icons/ai";
import './FirebaseLogin.css';

function FirebaseLogin(props) {
  const [loginMode, setLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [switchPassword, setSwitchPassword] = useState(false);

  const togglePassword = () => {
    setSwitchPassword(prevState => !prevState);
  };

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      user && props.history.push("/home")
    })
    return () => unSub()
  }, [props.history]);

  return (
    < div className="firebase-login" >
      <h1>{loginMode ? "Login" : "New Registration"}</h1>
      <form className="login-form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </form>
      <form className="login-form-group">
        <label>Password</label>
        <input
          name="password"
          type={switchPassword ? "text" : "password"}
          placeholder="Password"
          onChange={e => {
            setPassword(e.target.value)
          }}
        />
      </form>
      <div className="toggle-password" onClick={togglePassword}>
        {switchPassword ? <AiIcons.AiFillEye /> : <AiIcons.AiFillEyeInvisible />}
      </div>
      <Button variant="contained" color="primary" onClick={
        loginMode ? async () => {
          try {
            await auth.signInWithEmailAndPassword(email, password)
            props.history.push("/home")
          } catch (error) {
            alert(error.message)
          }
        } : async () => {
          try {
            await auth.createUserWithEmailAndPassword(email, password)
            props.history.push("/home")
          } catch (error) {
            alert(error.message)
          }
        }}>
        {loginMode ? "Login" : "Register"}
      </Button>
      <div className="login-switch" onClick={() => setLoginMode(!loginMode)}>
        {loginMode ? "Create new account ?" : "Back to Login"}
      </div>
      <Link to="/adminLogin" className="admin-login">Click here for the administrator.</Link>
    </div >
  )
};

export default FirebaseLogin;