import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./components/NaviBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Users from "./page/Users";
import Comments from "./page/Comments";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./asyncActions/users";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users/:id" element={<Users />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
