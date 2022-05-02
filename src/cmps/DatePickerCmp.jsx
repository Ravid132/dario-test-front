import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerCmp = ({ selectedDate, handleDateChange, label }) => {
  return (
    <div>
      <label>{label}</label>
      <DatePicker
        className='date-picker'
        selected={selectedDate}
        onChange={(date) => handleDateChange(date)}
      />
    </div>
  );
};
