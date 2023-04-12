import { user } from "../../../utils/utils";
import UserTrainingItem from "./UserTrainingItem";

const UserTrainingList = () => {
  return (
    <div>
      {user.schudeledTrainings.map((item, index) => (
        <UserTrainingItem key={item} item={item} index={index} />
      ))}
    </div>
  );
};

export default UserTrainingList;
