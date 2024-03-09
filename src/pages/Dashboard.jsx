import { UserButton, useClerk } from "@clerk/clerk-react";
import React from "react";

const Dashboard = () => {
  const { user } = useClerk();

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome to Your Dashboard {user.firstName}
      </h1>
      <UserButton />
    </div>
  );
};

export default Dashboard;
