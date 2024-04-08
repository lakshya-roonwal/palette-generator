import React from "react";
import { useParams } from "react-router-dom";
import SinglePaletteNav from "../singlepalette/SinglePaletteNav";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import PaletteOverview from "../singlepalette/PaletteOverview";
import PaletteAPI from "../singlepalette/PaletteAPI";
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
        <TabsContent value="apikey">
          <PaletteAPI />
        </TabsContent>
        <TabsContent value="settings">
          <PaletteSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SinglePalette;
