import React from "react";
import { Navbar } from "../Navbar/Navbar";

export const ToDo = () => {
  return (
    <>
      <div style={{ margin: "2rem" }}>
        {/* main containear */}
        <div className="row">
          {/*  containner 1*/}
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Navbar />
          </div>

          <div className="col-lg-9 col-md-3 col-sm-12">
            <div
              className="col-lg-12 col-md-3 col-sm-12"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>ToDo</p>
              <p>Login</p>
            </div>
            <hr />

            <div
              className="col-lg-12 col-md-3 col-sm-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
               marginTop:"20%",
               fontSize:"6rem",
               fontWeight:"bolder",
               color:"gray"

              }}
            >
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
