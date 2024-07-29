import React, { useState } from "react";
import "./Cards.css";

const Cards = ({ quote }) => {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <div className="main-card-container w-[14rem] h-[18rem] lg:w-[16rem] lg:h-[20rem] lg:gap-20 ">
      <div
        className={`${clicked ? "rotate-360" : ""} card card-front gap-5 w-[14rem] h-[18rem] lg:w-[16rem] lg:h-[20rem] lg:gap-20 `}
        onClick={handleClick}
      ></div>
      <div
        className={`${
          clicked ? "rotate-360" : ""
        } card card-back p-4 flex justify-center items-center w-[14rem] h-[18rem]lg:w-[16rem] lg:h-[20rem] lg:gap-20`}
        onClick={handleClick}
      >
        <p className="text-center ">{quote}</p>
      </div>
    </div>
  );
};

export default Cards;
