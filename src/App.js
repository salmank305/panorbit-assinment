import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Gallery } from "./Pages/Gallery";
import Home from "./Pages/HomeCom/Home";
import { ToDo } from "./Pages/ToDo";
import { Post } from "./Pages/Post";
import { Profile } from "./Pages/ProfileCom/Profile";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [currUser, setCurrUser] = useState();

  return (
    <UserContext.Provider value={{ currUser, setCurrUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
