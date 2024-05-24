import React from "react";

const Content = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Statistics</h3>
          <p className="text-gray-700">Content for statistics</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">User Activity</h3>
          <p className="text-gray-700">Content for user activity</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Settings</h3>
          <p className="text-gray-700">Content for settings</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
