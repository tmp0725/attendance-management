import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import "./Card.css";
import { db } from '../Firebase/Firebase';

function Card({ name }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [AttendanceTime, setAttendanceTime] = useState({ id: "", time: "" });

  Modal.setAppElement('#root');

  function workStart() {
    db.collection("AttendanceTime").doc("time").set({
      workStart: new Date().toLocaleString()
    }, { merge: true })
  };

  function workEnd() {
    db.collection("AttendanceTime").doc("time").set({
      workEnd: new Date().toLocaleString()
    }, { merge: true })
  };

  useEffect(() => {
    const storedData = db.collection("AttendanceTime").doc("time").onSnapshot((snapshot) => {
      setAttendanceTime({
        id: snapshot.id,
        time: snapshot.data().workStart,
        time2: snapshot.data().workEnd
      })
    })
    return () => storedData();
  }, []);

  return (
    <section>
      <div className="time-card">
        <div className="face front">
          <h3 className="tag-name">Members Card</h3>
          <h3 className="card-name">{name}</h3>
          <img src="https://cdn.pixabay.com/photo/2016/03/31/20/07/board-1295513_1280.png" alt="" className="chip"></img>
          <h3 className="card-number">0123 4567 8901 2345</h3>
          <h5 className="tag-day"><span>Date of<br></br> Incorporation</span><span>12/25</span></h5>
          <h5 className="tag-corporation">JAPAN Corporation</h5>
        </div>
        <div className="face back">
          <div className="black-bar"></div>
          <div className="ccv-text">
            <h5>Are you ready to go to work or leave work?</h5>
            <div className="white-bar"></div>
            <div className="ccv">123</div>
          </div>
          <div className="card-btns">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button className="card-btn" onClick={() => setModalOpen(true)}>I'm ready</button>
          </div>
          <Modal className="modal" isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
            <h2 className="modal-userName">{name}</h2>
            <h3>{AttendanceTime.time}</h3>
            <Button className="work-btn" variant="outlined" color="secondary" disabled={AttendanceTime.time != null} onClick={workStart}>Start Work</Button>
            <h3>{AttendanceTime.time2}</h3>
            <Button className="work-btn" variant="outlined" color="primary" disabled={AttendanceTime.time2 != null || AttendanceTime.time == null} onClick={workEnd}>End of work</Button>
            <Button className="modal-close" variant="contained" color="primary" onClick={() => setModalOpen(false)}>Close</Button>
          </Modal >
        </div>
      </div>
    </section >
  )
};

export default Card;