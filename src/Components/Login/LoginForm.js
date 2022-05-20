import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ Login, error }) {
  const [loginValues, setLoginValues] = useState({ name: "", email: "", password: "" });

  const submitHandler = e => {
    e.preventDefault();
    Login(loginValues);
  };

  return (
    <form className="login-form" onSubmit={submitHandler}>
      <div className="login-form-inner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h2>Login Form</h2>
        {(error !== "") ? (<div className="login-error">{error}</div>) : ""}
        <div className="login-form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="Username" name="name" id="name" autoComplete="off"
            onChange={e => setLoginValues({ ...loginValues, name: e.target.value })} value={loginValues.name} />
        </div>
        <div className="login-form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" placeholder="Email" name="email" id="email" autoComplete="off"
            onChange={e => setLoginValues({ ...loginValues, email: e.target.value })} value={loginValues.email} />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Password" name="password" id="password"
            onChange={e => setLoginValues({ ...loginValues, password: e.target.value })} value={loginValues.password} />
        </div>
        <input type="submit" value="Login" />
        <Link to="/" className="return-login">Return to the original screen</Link>
      </div>
    </form>
  )
};

export default LoginForm;