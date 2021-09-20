
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";

const Book = () => {
  // ✅ a change in default state: { from: ..., to: ... }
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });
  const disabledDays = [
    {
      year: 2021,
      month: 9,
      day: 22,
    },
    {
      year: 2021,
      month: 9,
      day: 25,
    },
    {
      year: 2021,
      month: 9,
      day: 6,
    }
  ];
  const handleDisabledSelect = disabledDay => {
    console.log('Tried including a disabled day', disabledDay);
  };
  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      disabledDays={disabledDays}
      shouldHighlightWeekends
      minimumDate={utils().getToday()}
      onDisabledDayError={handleDisabledSelect}
    />
  );
};

export default Book;
