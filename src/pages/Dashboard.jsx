import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import PaletteContainer from "@/components/dashboard/home/PaletteContainer";
import { useClerk } from "@clerk/clerk-react";
import {Routes,Route} from 'react-router-dom'
import { useState } from "react";
import SinglePalette from "@/components/dashboard/home/SinglePalette";

const Dashboard = () => {
  const { user } = useClerk();
  const [color, setColor] = useState("#aabbcc");
  const [palettes, setPalettes] = useState([1, 2, 3, 4]); // Just example
  const [samplePalettes, setSamplePalettes] = useState([1, 2, 3, 4]); // Just example
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="">
        <main>
        <Routes>
          <Route path='/' element={<PaletteContainer palettes={palettes} samplePalettes={samplePalettes}/>}/>
          <Route path='/singlepalette' element={<SinglePalette/>}/>
        </Routes>
          
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
