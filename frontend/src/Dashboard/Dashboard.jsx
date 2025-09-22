import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h1>Welcome, {user?.email || user?.name}</h1>
    </div>
  );
};

export default Dashboard;
