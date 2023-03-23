import React, { useContext } from "react";
import { UserContext } from "../App";
import { Map } from "../MapDisplay/Map";
import { Navbar } from "../Navbar/Navbar";
import "./Profile.css";

export const Profile = () => {
  const { currUser } = useContext(UserContext);
  // console.log("from profile page", currUser.name);
  return (
    <>
      <div style={{ margin: "2rem" }}>
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
              <p>Login</p>
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
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                  <Map lat={51.505} lng={-0.09} zoom={13} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



