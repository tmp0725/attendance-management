import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Clock from '../Clock/Clock';
import './CreateCard.css';

function CreateCard() {
  const [input, setInput] = useState("");

  return (
    <div className="create-card-container">
      <div className="navbar">
        <Link to="/">
          <button className="create-logout-btn">Logout</button>
        </Link>
        <Clock />
      </div>
      <h3 className="create-card-title">What is your name?</h3>
      <div className="push">
        <input type="text"
          placeholder="Please enter your name"
          className="create-card-input"
          value={input}
          onChange={e => setInput(e.target.value)} />
      </div>
      <div className="damy-card">
        <div className="damy-card-info">
          <h3>Members Card</h3>
          <p>Name:{input}</p>
        </div>
      </div>
      <div className="create-card-btn">
        <button className="create-card-submit-btn" onClick={() => alert('入力情報のお間違いにご注意下さい。')}>
          <p>Create a card</p>
        </button>
      </div>
    </div>
  )
};

export default CreateCard;