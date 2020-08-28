import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//comporents //
import {
  Home,
  Navbar,
  Contact,
  About,
  AddUser,
  User,
  EditUser,
  NotFound,
  ViewUser,
} from "./components/index";

function App(props) {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/users/edituser/:id" element={<EditUser />} />
        <Route path="/users/viewuser/:id" element={<ViewUser />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
