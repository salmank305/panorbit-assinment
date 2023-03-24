import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Navbar } from "../../Navbar/Navbar";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

import { LogoutCard } from "../LogoutCard/LogoutCard";
import Chat from "../ChatCom/Chat";

export const Profile = () => {
  const { currUser } = useContext(UserContext);
  const navigate = useNavigate();

  // console.log("from profile page", currUser.name);

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container" style={{ margin: "2rem" }}>
        {/* main containear */}
        <div className="row">
          {/*  containner 1*/}
          {/* <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> */}
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Navbar />
          </div>

          {/*  containner 2*/}
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div
              className="col-lg-12 col-md-12 col-sm-12 "
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>Profile</p>

              <LogoutCard />
            </div>
            <hr />

            <div
              className="col-lg-12 col-md-12 col-sm-12"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div style={{ textAlign: "center" }}>
                  <img
                    src={currUser?.profilepicture}
                    alt="profile pic"
                    style={{
                      width: "12rem",
                      height: "12rem",
                      borderRadius: "50%",
                    }}
                  />
                  <h4>{currUser?.name}</h4>
                </div>
                <div style={{ textAlign: "start" }}>
                  <p style={{ fontSize: "20px", color: "gray" }}>
                    UserName :{" "}
                    <span style={{ fontSize: "20px", color: "black" }}>
                      {currUser?.username}
                    </span>
                  </p>

                  <p style={{ fontSize: "20px", color: "gray" }}>
                    Email :{" "}
                    <span style={{ fontSize: "20px", color: "black" }}>
                      {currUser?.email}
                    </span>
                  </p>

                  <p style={{ fontSize: "20px", color: "gray" }}>
                    Phone :{" "}
                    <span style={{ fontSize: "20px", color: "black" }}>
                      {currUser?.phone}
                    </span>
                  </p>

                  <p style={{ fontSize: "20px", color: "gray" }}>
                    Website :{" "}
                    <span style={{ fontSize: "20px", color: "black" }}>
                      {currUser?.website}
                    </span>
                  </p>

                  <hr style={{ width: "100%" }} />

                  <p
                    style={{
                      fontSize: "20px",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Company
                  </p>

                  <p style={{ fontSize: "20px", color: "gray" }}>
                    Name :{" "}
                    <span style={{ fontSize: "20px", color: "black" }}>
                      {currUser?.company.name}
                    </span>
                  </p>

                  <p style={{ fontSize: "20px", color: "gray" }}>
                    catchphase :{" "}
                    <span style={{ fontSize: "20px", color: "black" }}>
                      {currUser?.company.catchPhrase}
                    </span>
                  </p>

                  <p style={{ fontSize: "20px", color: "gray" }}>
                    bs :{" "}
                    <span style={{ fontSize: "20px", color: "black" }}>
                      {currUser?.company.bs}
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-lg-7 col-md-7 col-sm-12 ">
                <div
                  style={{
                    borderLeft: "1px solid green",
                    height: "80%",
                    position: "absolute",
                    left: "auto",
                    marginLeft: "3rem",
                    top: "auto",
                  }}
                ></div>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 "
                  style={{ marginLeft: "8rem" }}
                >
                  <p
                    style={{
                      fontSize: "20px",
                      color: "gray",
                      textAlign: "left",
                    }}
                  >
                    Address:
                  </p>
                  <div style={{ marginLeft: "3rem" }}>
                    <p style={{ fontSize: "20px", color: "gray" }}>
                      Street :{" "}
                      <span style={{ fontSize: "20px", color: "black" }}>
                        {currUser?.address.street}
                      </span>
                    </p>
                    <p style={{ fontSize: "20px", color: "gray" }}>
                      Suite :{" "}
                      <span style={{ fontSize: "20px", color: "black" }}>
                        {currUser?.address.suite}
                      </span>
                    </p>
                    <p style={{ fontSize: "20px", color: "gray" }}>
                      Zipcode :{" "}
                      <span style={{ fontSize: "20px", color: "black" }}>
                        {currUser?.address.zipcode}
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 "
                  style={{ marginLeft: "8rem" }}
                >
                  <iframe
                    width="80%"
                    height="350"
                    className={currUser?.address.Map}
                    src={`https://maps.google.com/maps?q=${currUser?.address.street},t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                  {/* ---------- (geo)--------- */}
                  <div
                    className={currUser?.address.geo}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap:"1rem"
                    }}
                  >
                    <p style={{ fontSize: "15px", color: "gray" }}>
                      Lat :{" "}
                      <span style={{ fontSize: "15px", color: "black" }}>
                        {currUser?.address.geo.lat}
                      </span>
                    </p>
                    <p style={{ fontSize: "15px", color: "gray" }}>
                      Long :{" "}
                      <span style={{ fontSize: "15px", color: "black" }}>
                        {currUser?.address.geo.lng}
                      </span>
                    </p>
                  
                  </div>
                  <Chat/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
