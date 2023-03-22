import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Gallery } from "./Pages/Gallery";
import Home from "./Pages/Home";
import { ToDo } from "./Pages/ToDo";
import { Post } from "./Pages/Post";
import { Profile } from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
