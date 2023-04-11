import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./style.scss";
import DateTimePicker from "react-datetime-picker";
function AddTrainingSession() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
    console.log(date);
  };

  const handleTimeChange = (time) => {
    setTime(time.format("HH:mm"));
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(date);
  };
  return (
    <div className="p-1 m-2 card  border shadow">
      <p className="bg-primary text-white p-2 m-1">בחר תאריך ושעה</p>
      <Form
        onSubmit={(e) => submitForm(e)}
        className=" gap-1  p-1 m-1 d-flex flex-column"
      >
        <DateTimePicker
          className="form-control"
          format="yyyy-MM-dd HH:mm"
          onChange={handleDateChange}
          value={date}
          required
        />
        <button className="p-2 shadow rounded ">הוסף אימון</button>
      </Form>
    </div>
  );
}

const Manager = () => {
  const [showTrainingSession, setShowTrainingSession] = useState(false);
  return (
    <div className="d-flex flex-column gap-2 m-2">
      <button
        onClick={() => setShowTrainingSession((state) => !state)}
        className="p-2 w-100  bg-secondary "
      >
        {showTrainingSession ? "סגור" : "הוסף אימון חדש"}
      </button>
      <div className={showTrainingSession ? "" : "hide_class"}>
        <AddTrainingSession />
      </div>
    </div>
  );
};

export default Manager;
