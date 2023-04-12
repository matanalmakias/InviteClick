import React from "react";
import DaysList from "./../../components/training/DaysList";

const Home = ({ setCount }) => {
  return (
    <div>
      <DaysList setCount={setCount} />
    </div>
  );
};

export default Home;
