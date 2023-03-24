import { useEffect, useState } from "react";

import "./Home.css";
import { UserData } from "../UserData";
function Home() {
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

  return (
    <div className="banner d-flex justify-content-center">
      <div className="card p-2 m-2 mx-auto downCard  ">
        <div className="head">
          <h3 className="p-2 m-2"> Select an account</h3>
        </div>

       <div className="uses_card">
       {user?.map((ele) => {
        // console.log(ele);
          return <UserData userDataCollection={ele} />;
          
        })}
        
       </div>

      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L40,96C80,128,160,192,240,224C320,256,400,256,480,218.7C560,181,640,107,720,85.3C800,64,880,96,960,117.3C1040,139,1120,149,1200,144C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;

