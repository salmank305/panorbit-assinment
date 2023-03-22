// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Profile.css";

// export const Profile = () => {
//   return (
//     <>
//       <div className="row mainconitiner">
//         <div className="navDiv">
//           <nav
//             className="navbar navbar-expand-lg navbar-light bs-side-navbar"
//             style={{ backgroundColor: "#742DD2", borderRadius: "15px" }}
//           >
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <NavLink className="myLink" to="/profile">
//                 <div>Profile</div>
//               </NavLink>
//               <NavLink className="myLink" to="/post">
//                 <div>Post</div>
//               </NavLink>
//               <NavLink className="myLink" to="/gallery">
//                 <div>Gallery</div>
//               </NavLink>
//               <NavLink className="myLink" to="/todo">
//                 <div>ToDo</div>
//               </NavLink>
//             </div>
//           </nav>
//         </div>

//         <div className="col sec2">
//           <img src="" alt="profile pic" />
//           <p>leanne graham</p>
//           <p>UserName:Bret</p>
//           <p>Email:Sincere@april.biz</p>
//           <p>Phone:999999999</p>
//           <p>Website:leannegraham.com</p>

//           <p>Company</p>
//           <p>Name:Romaguera-Crona</p>
//           <p>catchphase : multi-layered client-server neural</p>
//           <p>bs : harness real-time e-markets</p>
//         </div>
//         <div className="col sec2">
//           <p>Address</p>
//           <p>Name:Romaguera-Crona</p>
//           <p>catchphase : multi-layered client-server neural</p>
//           <p>bs : harness real-time e-markets</p>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.39107485235!2d73.72107856029987!3d19.990944012930758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679313690679!5m2!1sen!2sin"
//             width="70%"
//             height="400"
//             style={{ border: 0, padding: "30px", marginTop: "2rem" }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </>
//   );
// };

import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "./Profile.css";

export const Profile = () => {
  return (
    <>
      <div className="container-fluid">
       
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Navbar/>
          </div>

          <div
            className="col-lg-3 col-md-5 col-sm-12 sec2"
            style={{ marginTop: "5rem",textAlign:"center" }}
          >
            <hr style={{ width: "100%" }} />
            <img src="./assest/pro1.jpg" alt="profile pic" style={{width:"12rem",height:"12rem",borderRadius:"50%"}}/>
            <p>leanne graham</p>
            <p>UserName:Bret</p>
            <p>Email:Sincere@april.biz</p>
            <p>Phone:999999999</p>
            <p>Website:leannegraham.com</p>
            <hr style={{ width: "100%"}} />
            <p>Company</p>
            <p>Name:Romaguera-Crona</p>
            <p>catchphase : multi-layered client-server neural</p>
            <p>bs : harness real-time e-markets</p>
          </div>

          <div
            className="col-lg-6 col-md-4 col-sm-12 sec2"
            style={{ marginTop: "5rem"}}
          >
            <hr style={{ width: "100%" }} />

            <p>Address</p>
            <p>Name:Romaguera-Crona</p>
            <p>catchphase : multi-layered client-server neural</p>
            <p>bs : harness real-time e-markets</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.39107485235!2d73.72107856029987!3d19.990944012930758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679313690679!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, padding: "30px", marginTop: "2rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
