import React from "react";
import "../../app/globals.css";
import Image from "next/image";

const Contacts = ({ title, imageUrl }) => {
  return (
    <div>
      <div className="flex justify-start items-center space-x-3">
        <div className={``}>
          <Image src={imageUrl} width={24} height={24} alt={title} />
        </div>
        <div>
          <div className="text-[14px] inter-font">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
