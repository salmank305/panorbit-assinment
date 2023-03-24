import React, { useEffect, useState } from "react";
import "./Chat.css";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Chat = () => {
  const [hide, setHide] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = () => {
      fetch("https://panorbit.in/api/users.json")
        .then((res) => res.json())
        .then((data) => setUser(data.users))
        .catch((error) => console.error(error));
    };
    getData();
  }, []);

  return (
    <div className="mainDiv" style={{ marginTop: hide ? "-270px" : "20px" }}>
      <div onClick={() => setHide(!hide)} className="chat">
        <div>
          <BsChatRight />
          <p>Chat</p>
        </div>
        {hide ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {hide ? (
        <div className="profiles">
          {user &&
            user.map((el) => (
              <div key={el.id}>
                <div className="maping_div">
                  <img src={el.profilepicture} alt="profile image" />
                  <p>{el.name}</p>
                </div>
                <hr />
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
