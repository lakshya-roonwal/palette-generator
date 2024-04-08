import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { PopoverPicker } from "@/components/PopoverPicker";

const PaletteOverview = () => {
  const [sampleData, setSampleData] = useState({
    _id: {
      $oid: "6606a70a2002727889fc31d4",
    },
    name: "Example Palette",
    palette: {
      primary: "#007bff",
      primary_content: "#ffffff",
      primary_light: "#6ec6ff",
      primary_dark: "#0056b3",
      secondary: "#6c757d",
      secondary_content: "#ffffff",
      secondary_light: "#b3b9bd",
      secondary_dark: "#343a40",
      foreground: "#212529",
      background: "#ffffff",
      border: "#ced4da",
      success: "#28a745",
      warning: "#ffc107",
      error: "#dc3545",
      success_content: "#ffffff",
      warning_content: "#212529",
      error_content: "#ffffff",
      _id: {
        $oid: "6606a70a2002727889fc31d5",
      },
    },
    owner: "user_2eGjDX5HgkwXKxhQ6NtbwcS0jIv",
    createdAt: {
      $date: "2024-03-29T11:33:30.065Z",
    },
    updatedAt: {
      $date: "2024-03-29T11:33:30.065Z",
    },
    __v: 0,
  });
  return (
    <div>
      <div className="flex w-full px-4 sm:px-6 lg:px-8 justify-between">
        <div className="flex justify-between items-center w-full my-4">
          <h2 className="text-2xl font-semibold">{sampleData.name}</h2>
          <Button>Save</Button>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col w-full gap-4 p-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">Manage Colors</h1>
        </div>
        {/* Colors Section */}
        <div>
        {/* Primary Color */}
          <section className="w-full py-6">
            <div className="container grid items-start gap-6 px-4 md:px-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Primary
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {Object.entries(sampleData.palette).slice(0,4).map(([key, value]) => {
                  // Exclude non-color properties and ID fields
                  if (
                    typeof value === "string" &&
                    key !== "_id" &&
                    key !== "name"
                  ) {
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-2 "
                      >
                        <PopoverPicker width="30px" height="30px" color={value} />
                        <span>{key}</span>: <span>{value}</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </section>

          {/* Secondary Color */}
          <section className="w-full py-6">
            <div className="container grid items-start gap-6 px-4 md:px-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Secondary
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {Object.entries(sampleData.palette).slice(4,8).map(([key, value]) => {
                  // Exclude non-color properties and ID fields
                  if (
                    typeof value === "string" &&
                    key !== "_id" &&
                    key !== "name"
                  ) {
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-2 "
                      >
                        <PopoverPicker width="30px" height="30px" color={value} />
                        <span>{key}</span>: <span>{value}</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </section>

          {/* Neutrals */}
          <section className="w-full py-6">
            <div className="container grid items-start gap-6 px-4 md:px-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Neutrals
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {Object.entries(sampleData.palette).slice(8,11).map(([key, value]) => {
                  // Exclude non-color properties and ID fields
                  if (
                    typeof value === "string" &&
                    key !== "_id" &&
                    key !== "name"
                  ) {
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-2 "
                      >
                        <PopoverPicker width="30px" height="30px" color={value} />
                        <span>{key}</span>: <span>{value}</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </section>

          {/* Utilities */}
          <section className="w-full py-6">
            <div className="container grid items-start gap-6 px-4 md:px-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Utilities
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {Object.entries(sampleData.palette).slice(11,17).map(([key, value]) => {
                  // Exclude non-color properties and ID fields
                  if (
                    typeof value === "string" &&
                    key !== "_id" &&
                    key !== "name"
                  ) {
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-2 "
                      >
                        <PopoverPicker width="30px" height="30px" color={value} />
                        <span>{key}</span>: <span>{value}</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PaletteOverview;
