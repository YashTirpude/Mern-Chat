import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  const [hideClassName, setHideClassName] = useState("flex");
  const [showClassName, setShowClassName] = useState("hidden");
  const [backbtn, setBackbtn] = useState("hidden");

  const hide = () => {
    if (window.innerWidth < 768) {
      setHideClassName("hidden");
      setShowClassName("flex");
      setBackbtn("flex");
    } else {
      setHideClassName("flex");
      setShowClassName("hidden");
      setBackbtn("hidden");
    }
  };

  const Back = () => {
    setHideClassName("flex");
    setShowClassName("hidden");
  };

  return (
    <div className="flex h-[550px] sm:h-[550px] md:h-[650px] rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div onClick={hide} className={`lg:flex  ${hideClassName} md:flex`}>
        <Sidebar />
      </div>
      <div className={`lg:flex  ${showClassName} md:flex  `}>
        <MessageContainer Back={Back} backbtn={backbtn} />
      </div>
    </div>
  );
};

export default Home;
