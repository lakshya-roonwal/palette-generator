import React from "react";
import { useParams } from "react-router-dom";
import SinglePaletteNav from "../singlepalette/SinglePaletteNav";
import { Tabs,TabsContent } from "@/components/ui/tabs";

const SinglePalette = () => {
  const params = useParams();
  console.log(params); // 👉️ {userId: '4200'}

  return (
    <div>
      <Tabs defaultValue="overview" className="w-full">
        <SinglePaletteNav />
        SinglePalette
        <h1>The Palette id is {params._id}</h1>
        <TabsContent value="overview">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="apikey">Change your password here.</TabsContent>
        <TabsContent value="settings">Settings</TabsContent>
      </Tabs>
    </div>
  );
};

export default SinglePalette;
