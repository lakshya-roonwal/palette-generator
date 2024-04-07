import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const PaletteCard = () => {
  return (
    <Card className="w-[400px]">
      <div className="flex items-center p-4">
        <div className="flex-1">
          <h2 className="text-lg font-normal">New Blog Post</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Created 2 days ago
          </p>
        </div>
        <Button size="icon" variant="ghost">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default PaletteCard;
