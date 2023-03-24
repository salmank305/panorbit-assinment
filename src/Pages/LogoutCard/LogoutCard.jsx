import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { UserData } from "../UserData";
import "./LogoutCard.css";
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
              width: "20rem",
              marginTop: "2rem",
              position: "absolute",
              borderRadius:"10px"
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
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%",
                  marginTop:"1rem"
                }}
              />

              <div
                className="userName"
                style={{
                  fontSize: "1rem",
                }}
              >
                {currUser?.name}
              </div>
              <div className="userName">{currUser?.email}</div>
              <hr />
              <div className="card-body cardScroll" style={{textAlign:"center"}}>
                {user?.map((ele) => {
                  return <UserData userDataCollection={ele} />;
                })}
              </div>

              <div
                to="/"
                className="btn btn-danger logbtn "
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
