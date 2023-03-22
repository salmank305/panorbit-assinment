import React from 'react'
import { Navbar } from '../Navbar/Navbar'


export const Post = () => {
  return (
    <>
 <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Navbar />
          </div>

          <div
            className="col-lg-9 col-md-4 col-sm-12 sec2"
            style={{ marginTop: "5rem" }}
          >
            <hr style={{ width: "auto" }} />
          <div style={{marginTop:"22%",fontSize:"6.5rem",color:"wheat",fontWeight:"bolder"}}>Coming soon</div>
          </div>
        </div>
      </div>
 
    </>
   
    
  )
}
