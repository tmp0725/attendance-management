import React, { useState, useEffect, useCallback } from 'react';
import Calendar from 'react-calendar';
import { db } from '../Firebase/Firebase';
import 'react-calendar/dist/Calendar.css';
import './Calendars.css';

function Calendars() {
  const [date, setDate] = useState(new Date());
  const [AttendanceTime, setAttendanceTime] = useState({ id: "" });

  const onChange = () => {
    setDate(date)
  };

  useEffect(() => {
    const storedData = db.collection("AttendanceTime").doc("time").onSnapshot((snapshot) => {
      const data = snapshot.data()
      setAttendanceTime({
        id: snapshot.id,
        workStart: data.workStart && new Date(data.workStart),
        workEnd: data.workEnd && new Date(data.workEnd)
      });
    });
    return () => storedData();
  }, []);

  const showTime = useCallback(() => {
    return (
      <>
        <>{AttendanceTime.workStart && <p>出勤 {AttendanceTime.workStart.toLocaleTimeString()}</p>}</>
        <>{AttendanceTime.workEnd && <p> 退勤 {AttendanceTime.workEnd.toLocaleTimeString()} </p>}</>
      </>
    )
  }, [AttendanceTime]);

  return <Calendar onChange={onChange} value={date} tileContent={showTime} />
};

export default Calendars;