import React, { useEffect, useState } from "react";
import { trainingList, user } from "../../utils/utils";
import "./style.scss";
// -----------------------HourList ----------------------------

const HourList = ({ selectedDay }) => {
  return (
    <div>
      {selectedDay &&
        selectedDay?.hours?.map((hour) => (
          <div key={hour} className="hour">
            {hour}
          </div>
        ))}
    </div>
  );
};
// -----------------------TrainingSession ----------------------------

const TrainingSession = ({ setCount, item, title, duration }) => {
  const schudleTraining = () => {
    setCount((state) => state + 1);
  };

  return (
    <div className="training-session m-2 card bg-white shadow p-2">
      <div className="training-session__title">{title}</div>
      <div className="card p-1 text-black training-session__duration">
        {duration} minutes
      </div>
      <button onClick={() => schudleTraining()} className="p-1">
        קבע אימון
      </button>
    </div>
  );
};
// -----------------------FilteredDayList ----------------------------

const FilteredDayList = ({ days, onDaySelect }) => {
  return (
    <>
      {days.map((item) => (
        <FilteredDayItem day={item} onDaySelect={onDaySelect} />
      ))}
    </>
  );
};

// -----------------------FilteredDayItem ----------------------------

const FilteredDayItem = ({ day, onDaySelect }) => {
  const handleDayClick = () => {
    onDaySelect(day);
  };

  return <div onClick={handleDayClick}>{day.date}</div>;
};

// -----------------------Days List ----------------------------
const DaysList = ({ setCount }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [datesPerPage] = useState(5);

  const handleDaySelect = (day) => {
    setSelectedDay((prevSelectedDay) => (prevSelectedDay === day ? null : day));
  };

  const groupSessionsByDate = (sessions) => {
    const grouped = {};
    sessions.forEach((session) => {
      const dateStr = session.date.toISOString().slice(0, 10);
      if (!grouped[dateStr]) {
        grouped[dateStr] = [session];
      } else {
        grouped[dateStr].push(session);
      }
    });
    return grouped;
  };

  // Group sessions by date
  const groupedByDate = groupSessionsByDate(trainingList);

  // Get an array of unique dates sorted by date
  const dates = Object.keys(groupedByDate)
    .sort((a, b) => new Date(a) - new Date(b))
    .slice((currentPage - 1) * datesPerPage, currentPage * datesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = Math.ceil(
    Object.keys(groupedByDate).length / datesPerPage
  );

  if (dates.length === 0) {
    return <div>No available dates</div>;
  }

  return (
    <div className="days-list">
      <div>בחר יום לצפייה בשעות פנויות</div>
      <HourList selectedDay={selectedDay} />
      {dates.map((dateStr) => {
        const date = new Date(dateStr);
        const selectedItem = groupedByDate[dateStr];
        let activeItems = 0;
        selectedItem.forEach((item, index) => {
          if (item.user !== null) {
            activeItems = activeItems + 1;
          }
        });
        const formattedDate = isNaN(date)
          ? ""
          : date.toLocaleDateString("he-IL", {
              weekday: "long",
              month: "long",
              day: "numeric",
            });

        return (
          <div
            key={dateStr}
            className={` card p-1 bg-secondary border shadow text-white days-list__day ${
              selectedDay === dateStr ? "selected" : ""
            }`}
            onClick={() => handleDaySelect(dateStr)}
          >
            {selectedDay === dateStr
              ? `סגירה >  ${formattedDate}`
              : formattedDate}
            <p className="">
              {activeItems} / {selectedItem.length}
            </p>
          </div>
        );
      })}
      {selectedDay && (
        <div className="days-list__sessions">
          {groupedByDate[selectedDay].map((session) => {
            return (
              <TrainingSession
                setCount={setCount}
                item={session}
                key={session.date.toString()}
                title={session.title}
                duration={session.duration}
              />
            );
          })}
        </div>
      )}
      <div className="pagination">
        {pageNumbers > 1 &&
          Array.from({ length: pageNumbers }).map((_, index) => (
            <div
              key={index}
              className={`pagination__page-number ${
                index + 1 === currentPage ? "selected" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DaysList;
