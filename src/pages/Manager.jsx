import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { DatePicker, TimePicker } from "antd";

import "./style.scss";
import styled from "styled-components";

function AddTrainingSession() {
  const [dateTime, setDateTime] = useState(new Date());

  const handleDateTimeChange = (dateTime) => {
    setDateTime(dateTime);
    console.log(dateTime);
  };

  return (
    <div>
      <p className="bg-primary text-white p-2 m-1">בחר תאריך ושעה</p>
      <DatePicker
        id="date"
        className="form-control text-center"
        name="date"
        onChange={handleDateTimeChange}
        value={dateTime}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
      />
    </div>
  );
}

const Manager = () => {
  return (
    <div>
      <AddTrainingSession />
    </div>
  );
};

export default Manager;
