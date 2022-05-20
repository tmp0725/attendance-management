import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [date, setDate] = useState(new Date());

  const updateTime = () => {
    setDate(new Date());
  }

  const time = date.toLocaleTimeString();
  const month = date.getMonth() + 1 + "月";
  const day = date.getDate() + "日";
  const week = "日月火水木金土"[date.getDay()];

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => { clearInterval(timer) }
  }, []);

  return (
    <>
      <h3 className="clock-date">
        {month}
        {day}
        {"(" + week + ")"}
      </h3>
      <h3 className="clock">
        {time}
      </h3>
    </>
  )
};

export default Clock;