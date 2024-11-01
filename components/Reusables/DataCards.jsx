import React from "react";

const DataCards = ({ title, value, perc, up, otherStyles }) => {
  return (
    <div className={`${otherStyles} rounded-xl p-6`}>
      <div className="text-[12px]">{title}</div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-2xl font-medium">{value}</div>
        <div className="flex justify-end items-center space-x-1">
          <div className="text-[12px]">{perc}</div>
          <div>
            {up ? <img src="/arrow-up.svg" /> : <img src="/arrow-down.svg" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCards;
