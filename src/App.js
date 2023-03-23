import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Gallery } from "./Pages/Gallery";
import Home from "./Pages/Home";
import { ToDo } from "./Pages/ToDo";
import { Post } from "./Pages/Post";
import { Profile } from "./Pages/Profile";
import { createContext, useState } from "react";


export const UserContext = createContext();

function App() {
  const [currUser, setCurrUser] = useState();

  return (
    <UserContext.Provider value={{ currUser, setCurrUser }}>
   {/* <div className="App">    */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post" element={<Post />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/todo" element={<ToDo />} />
          </Routes>
        </BrowserRouter>
      {/* </div> */}
    </UserContext.Provider>
  );
}

export default App;
