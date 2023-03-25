import React from "react";
import Banner from "./components/Banner";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./components/Marketplace";
import { Routes, Route } from "react-router-dom";
import CreateCourse from "./components/CreateCourse";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen flex justify-center">
        <Banner />
      </div>
      <Routes>
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/create-course" element={<CreateCourse />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
