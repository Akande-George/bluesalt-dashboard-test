import React from "react";
import { Menu, Search } from "lucide-react";

const Header = ({ toggleNav, toggleNot }) => {
  return (
    <div className="border-b bg-white border-[#F0ECEC]">
      <div className="hidden lg:block">
        <section className="flex justify-between items-center py-3 px-6">
          <div>
            <div className="font-medium">Dashboard</div>
          </div>
          <div className="flex justify-end items-center space-x-3">
            <div className="bg-[#1C1C1C0D] py-1 px-2 rounded-lg flex justify-start items-center">
              <Search color="#1C1C1C33" />
              <input
                className="bg-transparent focus:outline-none px-1"
                placeholder="Search"
              />
              <div className="text-[#1C1C1C33]">⌘/</div>
            </div>
            <div>
              <img className="w-[25px]" src="/sun.svg" />
            </div>
            <div>
              <img className="w-[25px]" src="/ccw.svg" />
            </div>
            <div>
              <img className="w-[25px]" src="/bell.svg" />
            </div>
            <div>
              <img className="w-[25px]" src="/sidebar.svg" />
            </div>
          </div>
        </section>
      </div>
      <div className="block lg:hidden">
        <section className="flex justify-between items-center py-3 px-10">
          <div className="flex justify-start items-center space-x-3">
            <div>
              <Menu onClick={toggleNav} />
            </div>
            <div className="font-medium">Dashboard</div>
          </div>
          <div className="flex justify-end items-center space-x-3">
            <div>
              <img className="w-[30px]" src="/sun.svg" />
            </div>
            <div>
              <img onClick={toggleNot} className="w-[30px]" src="/bell.svg" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
