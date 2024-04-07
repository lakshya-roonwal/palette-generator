import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SinglePaletteNav = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8">
        <TabsList className="bg-white">
          <TabsTrigger className=""  value="account">Account</TabsTrigger>
          <TabsTrigger className=""  value="password">Password</TabsTrigger>
        </TabsList>
    </div>
  );
};

export default SinglePaletteNav;
