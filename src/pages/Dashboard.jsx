import { UserButton, useClerk } from "@clerk/clerk-react";
import React, { useState } from "react";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { PopoverPicker } from "@/components/PopoverPicker";
import PaletteContainer from "@/components/dashboard/PaletteContainer";
import PaletteCard from "@/components/dashboard/home/PaletteCard";

const Dashboard = () => {
  const { user } = useClerk();
  const [color, setColor] = useState("#aabbcc");
  const [palettes, setPalettes] = useState([1,2,3,4]) // Just example 
  const [samplePalettes, setSamplePalettes] = useState([1,2,3,4]) // Just example 
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="py-6">
        <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h3 className="text-xl py-8 leading-6 font-medium text-gray-900">Recent Palettes</h3>
          <div className="px-4 py-4 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="h-24  rounded-lg shadow">+</div>
            {palettes.map((palette)=>(
              <PaletteCard/>
            ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl py-8 leading-6 font-medium text-gray-900">Trending / Popular Palettes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
              {samplePalettes.map((palette)=>(
              <PaletteCard/>
            ))}
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
