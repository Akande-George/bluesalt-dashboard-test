import React from "react";
import "../../app/globals.css";

const NotificationCard = ({ otherStyles, title, time, type }) => {
  return (
    <div>
      <div className="flex justify-start space-x-3">
        <div className={`p-1 ${otherStyles} w-[24px] h-[24px] rounded-[8px]`}>
          <img
            src={
              type === "bug"
                ? "/BugBeetle.svg"
                : type === "user"
                ? "/notUser.svg"
                : "/Broadcast.svg"
            }
          />
        </div>
        <div>
          <div className="text-[14px] inter-font">{title}</div>
          <div className="text-[12px] grey-text">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
