import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Homepage = () => {
  const [activePlayer, setActivePlayer] = useState("cross");

  const handleRowClick = (id) => {};

  return (
    <div className="container max-w-5xl mx-auto flex h-screen w-full items-center justify-center">
      <div className="grid grid-cols-3 grid-rows-3 gap-6 w-[50%] h-[60%] bg-gray-200">
        <div className="block" onClick={() => handleRowClick(1)}>
          <BsCircle className="h-20 w-20 text-gray-500" />
          <RxCross1 className="h-20 w-20 text-gray-500" />
        </div>
        <div className="block" onClick={() => handleRowClick(2)}>
          <RxCross1 className="h-20 w-20 text-gray-500" />
          <BsCircle className="h-20 w-20 text-gray-500" />
        </div>
        <div className="block" onClick={() => handleRowClick(3)}>
          <RxCross1 className="h-20 w-20 text-gray-500" />
          <BsCircle className="h-20 w-20 text-gray-500" />
        </div>
        <div className="block" onClick={() => handleRowClick(4)}>
          <RxCross1 className="h-20 w-20 text-gray-500" />
          <BsCircle className="h-20 w-20 text-gray-500" />
        </div>
        <div className="block" onClick={() => handleRowClick(5)}>
          <RxCross1 className="h-20 w-20 text-gray-500" />
          <BsCircle className="h-20 w-20 text-gray-500" />
        </div>
        <div className="block" onClick={() => handleRowClick(6)}>
          <RxCross1 className="h-20 w-20 text-gray-500" />
          <BsCircle className="h-20 w-20 text-gray-500" />
        </div>
        <div className="block" onClick={() => handleRowClick(7)}>
          <RxCross1 className="h-20 w-20 text-gray-500" />
          <BsCircle className="h-20 w-20 text-gray-500" />
        </div>
        <div className="block" onClick={() => handleRowClick(8)}>
          <RxCross1 className="h-20 w-20 text-gray-500" />
          <BsCircle className="h-20 w-20 text-gray-500" />
        </div>
        <div className="block" onClick={() => handleRowClick(9)}>
          <RxCross1 className="h-20 w-20 text-gray-500" />
          <BsCircle className="h-20 w-20 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
