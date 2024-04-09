import React from "react";
import { useParams } from "react-router-dom";
import SinglePaletteNav from "../singlepalette/SinglePaletteNav";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import PaletteOverview from "../singlepalette/PaletteOverview";
import PaletteExport from "../singlepalette/PaletteExport";
import PaletteSettings from "../singlepalette/PaletteSettings";

const SinglePalette = () => {
  const params = useParams();
  console.log(params); // 👉️ {userId: '4200'}

  return (
    <div>
      <Tabs defaultValue="overview" className="w-full">
        <SinglePaletteNav />
        <TabsContent value="overview">
          <PaletteOverview />
        </TabsContent>
        <TabsContent value="export">
          <PaletteExport />
        </TabsContent>
        <TabsContent value="settings">
          <PaletteSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SinglePalette;
