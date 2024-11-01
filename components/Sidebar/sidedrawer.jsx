import React from "react";
import SideMenu from "./SideMenu";
import {
  administration,
  audit,
  customers,
  dashboard,
  kyc,
  reports,
  request,
  settings,
  tasks,
  users,
} from "../../lib/svgs";
import { X } from "lucide-react";
const Sidedrawer = ({ toggleNav }) => {
  return (
    <div className="border-r border-[#F0ECEC] h-full">
      <section className="px-3 py-4">
        <div className="px-4 flex justify-between items-center">
          <img src="/logo.svg" />
          <div className="block lg:hidden">
            <button onClick={toggleNav}>
              <X />
            </button>
          </div>
        </div>
        <div className="pt-8">
          <SideMenu icon={dashboard.src} name="Dashboard" />
          <SideMenu icon={request.src} name="Requests" />
          <hr />
          <SideMenu icon={kyc.src} name="Kyc" />
          <SideMenu icon={reports.src} name="Reports" />
          <SideMenu icon={tasks.src} name="Tasks" />
          <hr />
          <SideMenu icon={audit.src} name="Audit Trail" />
          <SideMenu icon={customers.src} name="Customers" />
          <hr />
          <SideMenu icon={users.src} name="Users" />
          <SideMenu icon={settings.src} size="w-[16px]" name="Settings" />
          <SideMenu icon={administration.src} name="Administration" />
        </div>
        <div className="pt-14">
          <div className="flex justify-start text-[#292D32] hover:bg-primary-foreground px-3 items-center py-3 my-1 space-x-3">
            <div>
              <img src="/avatar.svg" />
            </div>
            <div className="text-[14px]">ByeWind</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidedrawer;
