import React from "react";
import NotificationCard from "../Reusables/NotificationCard";
import "../../app/globals.css";
import Activity from "../Reusables/Activities";
import Contacts from "../Reusables/Contacts";
import { X } from "lucide-react";
const notifications = [
  {
    title: "You fixed a bug.",
    time: "just now",
    type: "bug",
  },
  {
    title: "New user registered.",
    time: "59 minutes ago",
    type: "user",
  },
  {
    title: "You fixed a bug.",
    time: "12 hours ago",
    type: "bug",
  },
  {
    title: "Andi Lane subscribe...",
    time: "Today, 11:59 AM",
    type: "subscribe",
  },
];
const activities = [
  {
    imageUrl: "/images/1.png",
    title: "Changed the style.",
    time: "Just now",
  },
  {
    imageUrl: "/images/2.png",
    title: "Released a new version.",
    time: "59 minutes ago",
  },
  {
    imageUrl: "/images/3.png",
    title: "Submitted a bug.",
    time: "12 hours ago",
  },
  {
    imageUrl: "/images/4.png",
    title: "Modified A data in Page X.",
    time: "Today, 11:59 AM",
  },
  {
    imageUrl: "/images/5.png",
    title: "Deleted a page in Project X..",
    time: "Feb 2, 2024",
  },
];
const contacts = [
  {
    imageUrl: "/images/a.png",
    title: "Natali Craig",
  },
  {
    imageUrl: "/images/b.png",
    title: "Drew Cano",
  },
  {
    imageUrl: "/images/c.png",
    title: "Natali Craig",
  },
  {
    imageUrl: "/images/d.png",
    title: "Drew Cano",
  },
  {
    imageUrl: "/images/e.png",
    title: "Natali Craig",
  },
  {
    imageUrl: "/images/f.png",
    title: "Drew Cano",
  },
];

const Notifications = ({ toggleNotification }) => {
  return (
    <div>
      <section className="bg-[#FFF8F8] rounded-[30px] p-6 h-[680px] overflow-y-auto space-y-4">
        <div>
          <div className="flex justify-between items-center">
            <div className="text-[14px] inter-font">Notifications</div>
            <div className="lg:hidden">
              <X onClick={toggleNotification} />
            </div>
          </div>
          <div className="space-y-3 pt-4">
            {notifications.map((item, index) => (
              <NotificationCard
                key={index}
                otherStyles={
                  item.type === "bug" ? "bg-[#E3F5FF]" : "bg-[#E5ECF6]"
                }
                title={item.title}
                type={item.type}
                time={item.time}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[14px] inter-font">Activities</div>
          <div className="space-y-1 pt-4">
            {activities.map((item, index) => (
              <Activity
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                time={item.time}
                showLine={activities.length - 1 === index ? true : false}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[14px] inter-font">Contacts</div>
          <div className="space-y-3 pt-4">
            {contacts.map((item, index) => (
              <Contacts
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
