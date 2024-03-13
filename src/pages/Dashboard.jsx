import { UserButton, useClerk } from "@clerk/clerk-react";
import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import DashboardNavbar from "@/components/ui/dashboard/DashboardNavbar";
const Dashboard = () => {
  const { user } = useClerk();

  {
    /* <UserButton /> */
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="py-6">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold leading-tight text-gray-900">
              Create Your Palette
            </h2>
          </div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Color Palette
              </h3>
              <div className="rounded-lg h-96">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="bg-[#FF0000] text-white">
                    <CardHeader>
                      <CardTitle>Primary</CardTitle>
                      <CardDescription>#FF0000</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-[#333333] text-white">
                    <CardHeader>
                      <CardTitle>Primary Content</CardTitle>
                      <CardDescription>#333333</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-[#E0E0E0] text-gray-900">
                    <CardHeader>
                      <CardTitle>Primary Light</CardTitle>
                      <CardDescription>#E0E0E0</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-[#0000FF] text-white">
                    <CardHeader>
                      <CardTitle>Secondary</CardTitle>
                      <CardDescription>#0000FF</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-[#3533FF] text-white">
                    <CardHeader>
                      <CardTitle>Secondary Light</CardTitle>
                      <CardDescription>#3533FF</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-[#2020CC] text-white">
                    <CardHeader>
                      <CardTitle>Secondary Dark</CardTitle>
                      <CardDescription>#2020CC</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-[#00FF00] text-white">
                    <CardHeader>
                      <CardTitle>Success</CardTitle>
                      <CardDescription>#00FF00</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-[#FFFF00] text-gray-900">
                    <CardHeader>
                      <CardTitle>Warning</CardTitle>
                      <CardDescription>#FFFF00</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-[#FF0000] text-white">
                    <CardHeader>
                      <CardTitle>Error</CardTitle>
                      <CardDescription>#FF0000</CardDescription>
                    </CardHeader>
                  </Card>
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
