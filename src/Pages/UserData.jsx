import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export const UserData = ({ userDataCollection }) => {
  const { name, profilepicture } = userDataCollection;
  const { setCurrUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSwtich = () => {
    navigate("/profile");
    setCurrUser(userDataCollection);
  };

  return (
    <>
      <div className="d-flex m-2 p-2" onClick={handleSwtich}>
        <img className="profile_pic" src={profilepicture} alt="profilePic" />
        <div className="userName">{name}</div>
      </div>
      <hr className="bg-dark" />
    </>
  );
};
