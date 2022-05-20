import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { auth } from './Firebase';

function FirebaseAuth(props) {
  const [AttendanceTime, setAttendanceTime] = useState({ id: "", time: "" });

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
    <button onClick={
      async () => {
        try {
          await auth.signOut();
          props.history.push("/");
        } catch (error) {
          alert(error.message);
        }
      }}>
      <p>Logout</p>
    </button>
  )
};

export default FirebaseAuth;