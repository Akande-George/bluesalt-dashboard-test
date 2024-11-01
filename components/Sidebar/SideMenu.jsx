import React from "react";
import Link from "next/link";

const SideMenu = ({ icon, name, size }) => {
  return (
    <Link
      href="/"
      className="flex justify-start text-[#292D32] hover:bg-primary-foreground px-3 items-center py-3 my-1 space-x-3"
    >
      <div>
        <img src={icon} className={`${size}`} />
      </div>
      <div className="text-[14px]">{name}</div>
    </Link>
  );
};

export default SideMenu;
