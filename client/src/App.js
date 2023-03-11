import React, { useReducer, useState } from "react";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";

import { Route, Routes, Navigate } from "react-router-dom";
// import Home from "./Home";

import { Nav } from "./Nav";

 function App() {

const [user, setUser] = useState(null)

const updateUser = (user) => setUser(user)

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/Signup" exact element={<Signup />}></Route>
        <Route path="/Login" exact element={<Login updateUser = {updateUser} />}></Route>
        {/* <Route path="/home" element={<Home />}></Route> */}
        <Route path="*" element={<Navigate to="Signup" />}></Route>
      </Routes>
    </>
  );
}

export default App;
