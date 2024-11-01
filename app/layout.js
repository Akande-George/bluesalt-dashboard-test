"use client";
// import localFont from "next/font/local";
import "./globals.css";
import React, { useState } from "react";
import Header from "@/components/AppHeader/header";
import Notifications from "@/components/Sidebar/Notifications";
import Sidedrawer from "@/components/Sidebar/sidedrawer";

export default function RootLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const toggle = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };
  return (
    <html lang="en">
      <body>
        <main className="flex justify-start">
          <section className="hidden lg:block lg:w-[226px] fixed top-0 left-0 h-screen overflow-y-auto">
            <Sidedrawer />
          </section>
          <section className="flex-1">
            <div className="fixed top-0 left-0 lg:left-[226px] right-0 h-[60px] z-10">
              <Header toggleNav={toggle} toggleNot={toggleNotification} />
            </div>
            <section className="flex justify-start p-6 mt-[60px]">
              <section className="flex-1 lg:ml-[226px] lg:mr-[264px]">
                {children}
              </section>
              <section className="hidden lg:block lg:w-[264px] fixed top-[60px] pt-6 right-0 h-screen bg-white overflow-y-auto">
                <Notifications />
              </section>
            </section>
          </section>
          {showSidebar && (
            <section className="w-[326px] transform transition-transform duration-700 fixed top-0 left-0 h-screen z-40 bg-white overflow-y-auto">
              <Sidedrawer toggleNav={toggle} />
            </section>
          )}
          {showNotification && (
            <section className="z-30 w-[320px] fixed pt-6 right-0 h-screen transform transition-transform duration-700 bg-white overflow-y-auto">
              <Notifications toggleNotification={toggleNotification} />
            </section>
          )}
        </main>
      </body>
    </html>
  );
}
