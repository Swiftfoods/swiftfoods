import React from "react";
import { IoStarSharp, IoStarOutline, IoStarHalf } from "react-icons/io5";

const Rating = ({ value, color, text }) => {
  return (
    <div className="flex items-center">
      <span className="flex">
        <i style={{ color }}>
          {value >= 1 ? (
            <IoStarSharp className="text-2xl" />
          ) : value >= 0.5 ? (
            <IoStarHalf className="text-2xl" />
          ) : (
            <IoStarOutline className="text-2xl" />
          )}
        </i>
      </span>
      <span className="flex">
        <i style={{ color }}>
          {value >= 2 ? (
            <IoStarSharp className="text-2xl" />
          ) : value >= 1.5 ? (
            <IoStarHalf className="text-2xl" />
          ) : (
            <IoStarOutline className="text-2xl" />
          )}
        </i>
      </span>
      <span className="flex">
        <i style={{ color }}>
          {value >= 3 ? (
            <IoStarSharp className="text-2xl" />
          ) : value >= 2.5 ? (
            <IoStarHalf className="text-2xl" />
          ) : (
            <IoStarOutline className="text-2xl" />
          )}
        </i>
      </span>
      <span className="flex">
        <i style={{ color }}>
          {value >= 4 ? (
            <IoStarSharp className="text-2xl" />
          ) : value >= 3.5 ? (
            <IoStarHalf className="text-2xl" />
          ) : (
            <IoStarOutline className="text-2xl" />
          )}
        </i>
      </span>
      <span className="flex">
        <i style={{ color }}>
          {value >= 5 ? (
            <IoStarSharp className="text-2xl" />
          ) : value >= 4.5 ? (
            <IoStarHalf className="text-2xl" />
          ) : (
            <IoStarOutline className="text-2xl" />
          )}
        </i>
      </span>
      <span className="rev">{text && text}</span>
    </div>
  );
};

export default Rating;
