import React from "react";
import "../../app/globals.css";
import Image from "next/image";

const Activity = ({ title, time, imageUrl, showLine }) => {
  return (
    <div>
      <div className="flex justify-start space-x-3">
        <div className={``}>
          <Image src={imageUrl} width={24} height={24} alt={title} />
          {!showLine && (
            <div className="border-l border-[#1C1C1C1A] ml-3 mt-1 h-[18.25px]"></div>
          )}
        </div>
        <div>
          <div className="text-[14px] inter-font">{title}</div>
          <div className="text-[12px] grey-text">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
