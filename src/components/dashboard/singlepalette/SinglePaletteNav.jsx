import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SinglePaletteNav = () => {
  return (
    <div className="w-full bg-white">
        <TabsList className="bg-white px-4 sm:px-6 lg:px-8">
          <TabsTrigger  value="overview">Overview</TabsTrigger>
          <TabsTrigger  value="apikey">API Key</TabsTrigger>
          <TabsTrigger  value="settings">Settings</TabsTrigger>
        </TabsList>
        <Separator/>
    </div>
  );
};

export default SinglePaletteNav;
