import { UserButton } from "@clerk/clerk-react";
import React from "react";

const DashboardNavbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-lg font-semibold">Color Palette Generator</h1>
            </div>
          </div>
          <div className="flex items-center">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
