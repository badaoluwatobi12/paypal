import React from "react";
import "./Login";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Account from "./Account";
import Done from "./Done";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
