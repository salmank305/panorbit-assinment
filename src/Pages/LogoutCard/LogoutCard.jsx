import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { UserData } from "../UserData";
import "./LogoutCard.css"
export const LogoutCard = () => {
  const [showcard, setShowCard] = useState(false);
  const { currUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [user, setUser] = useState();
  // salman
  useEffect(() => {
    const getData = () => {
      fetch("https://panorbit.in/api/users.json")
        .then((res) => res.json())
        .then((data) => setUser(data.users))
        .catch((error) => console.error(error));
    };
    getData();
  }, []);
  const handleSwtich = () => {
    navigate("/");
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          src={currUser?.profilepicture}
          alt="profile pic"
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            marginRight: "1rem",
          }}
        />
        <div>
          <span
            onClick={() => setShowCard(!showcard)}
            style={{
              fontSize: "1.2rem",
            }}
          >
            {currUser?.name}
          </span>
        </div>
      </div>
      <div>
        {showcard && (
          <div
            className="card"
            style={{
              width: "18rem",
              marginTop: "2rem",
              position: "absolute",
              zIndex: "1",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                className="card-img-top"
                src={currUser?.profilepicture}
                alt="Card image cap"
                style={{
                  width: "5.5rem",
                  height: "5.5rem",
                  borderRadius: "50%",
                }}
              />

              <div
                className="userName"
                style={{
                  fontSize: "1.2rem",
                }}
              >
                {currUser?.name}
              </div>
              <div className="userName">{currUser?.email}</div>
              <div className="card-body cardScroll">
                {user?.map((ele) => {
                  return <UserData userDataCollection={ele} />;
                })}
             
              </div>
                 <div
                  to="/"
                  className="btn btn-danger rounded-pill mb-2 "
                  onClick={handleSwtich}
                >
                  Logout
                </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
