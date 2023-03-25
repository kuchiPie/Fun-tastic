import React from "react";
import Banner from "./components/Banner";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./components/Marketplace";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen flex justify-center">
        <Banner />
       </div>
       <Marketplace/>
       <Footer/>
    </>
  );
};

export default App;
