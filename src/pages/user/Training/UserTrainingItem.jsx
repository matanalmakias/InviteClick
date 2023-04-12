import React from "react";
import { trainingList } from "../../../utils/utils";
import moment from "moment";
const UserTrainingItem = ({ item, index }) => {
  const foundItem = trainingList.find((training) => training.id === item);
  return (
    <div className="d-flex card p-1 border  flex-column mt-1">
      <div className="bg-secondary mb-1 text-white">
        <div className="text-center">{index}</div>
      </div>
      <p className="w-100 bg-secondary text-white p-1 mb-1 ">
        {foundItem.title}
      </p>
      <p className="w-100 bg-secondary text-white p-1 mb-1 ">
        {moment(foundItem.date).format("DD/MM/YYYY HH:mm")}
      </p>
      <button className="p-1 shadow bg-white text-secondary">בטל אימון</button>
    </div>
  );
};

export default UserTrainingItem;
