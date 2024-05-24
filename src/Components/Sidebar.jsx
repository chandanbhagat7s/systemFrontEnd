import React from "react";

const Sidebar = ({ children, isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out bg-gray-800 text-white w-64 z-30`}
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button className="md:hidden mt-2 text-white" onClick={toggleSidebar}>
          Close Sidebar
        </button>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
