import React from 'react'
import PaletteCard from "@/components/dashboard/home/PaletteCard";
import { Button } from "@/components/ui/button";

const PaletteContainer = ({palettes,samplePalettes}) => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Button className="flex items-center">Add New Palette</Button>
            <div className="px-4 py-4 sm:px-0">
              <div className="mt-8">
                <h3 className="text-xl leading-6 font-medium text-gray-900">
                  Recent Palettes
                </h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {palettes.map((palette) => (
                    <PaletteCard />
                  ))}
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl leading-6 font-medium text-gray-900">
                  Trending / Popular Palettes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                  {samplePalettes.map((palette) => (
                    <PaletteCard />
                  ))}
                </div>
              </div>
            </div>
          </div>
  )
}

export default PaletteContainer