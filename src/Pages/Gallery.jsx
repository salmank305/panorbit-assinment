import React from 'react'
import { Navbar } from '../Navbar/Navbar'


export const Gallery = () => {
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
            <hr style={{ width: "100%" }} />
          <div style={{marginTop:"22%",fontSize:"4rem",color:"gray"}}>Coming soon</div>
          </div>
        </div>
      </div>

    </>
  )
}
