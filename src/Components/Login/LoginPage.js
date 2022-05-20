import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import './Login.css';

function LoginPage() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  };

  const Login = (inputData) => {
    if (inputData.email === adminUser.email && inputData.password === adminUser.password) {
      setUser({
        name: inputData.name,
        email: inputData.email
      });
    } else {
      setError("The information you entered is incorrect.")
    }
  };

  return (
    <div className="login-page">
      <div className="login-page-inner">
        {(user.email !== "") ? (
          <div className="welcome">
            <h2>Welcome,<span>{user.name}!</span></h2>
            <p>Do you want to move the page?</p>
            <Link to="/home"><button>Yes</button></Link>
            <Link to="/adminLogin"><button>No</button></Link>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </div >
  )
};

export default LoginPage;