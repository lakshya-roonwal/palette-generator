import { UserButton, useClerk } from "@clerk/clerk-react";
import React, { useState } from "react";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { PopoverPicker } from "@/components/PopoverPicker";

const Dashboard = () => {
  const { user } = useClerk();
  const [color, setColor] = useState("#aabbcc");
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="py-6">
        <main>
          <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="my-4">
                <h2 className="text-2xl font-bold">Select Your Colors</h2>
              </div>
              <div>
                <div className="flex -justify-between">
                  <div>
                    <p className="font-semibold">Color 1</p>
                    <PopoverPicker
                      color={color}
                      onChange={setColor}
                      width="28px"
                      height="28px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
