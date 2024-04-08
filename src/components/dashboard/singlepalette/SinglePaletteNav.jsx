import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const SinglePaletteNav = () => {
  return (
    <div className="w-full bg-white">
      <TabsList className="bg-white px-4 sm:px-6 lg:px-8">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger className="hover:bg-gray-200" value="apikey">API Key</TabsTrigger>
        <TabsTrigger className="hover:bg-gray-200" value="settings">Settings</TabsTrigger>
      </TabsList>
    </div>
  );
};

export default SinglePaletteNav;
