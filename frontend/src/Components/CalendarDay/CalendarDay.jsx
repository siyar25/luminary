import { useState } from "react";
import "./CalendarDay.css";

export default function CalendarDay({
  day,
  number,
  month,
  isActive,
  activeDay,
}) {
  function handleOnClick(e) {
    isActive(
      day,
      {day: number, month: month}
    );
  }

  return (
    <div
      className={`calendar-day-container ${
        activeDay === day ? "active-day" : ""
      }`}
      onClick={(e) => handleOnClick(e)}
      tabIndex={0}
    >
      <div className="calendar-day">{day}</div>
      <div className="calendar-number">{number}</div>
      <div className="calendar-month">{month}</div>
    </div>
  );
}
