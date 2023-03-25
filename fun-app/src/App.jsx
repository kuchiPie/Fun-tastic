import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./components/Marketplace";
import { Routes, Route } from "react-router-dom";
import CreateCourse from "./components/CreateCourse";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AvatarSelect from "./components/AvatarSelect";
const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/signin" element={<LoginPage/>} />
        <Route exact path="/signup" element={<SignupPage/>} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/create-course" element={<CreateCourse />} />
        <Route exact path="/select-avatar" element={<AvatarSelect />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
