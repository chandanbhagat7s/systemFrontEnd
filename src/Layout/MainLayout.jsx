import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1">
        <header className="p-4 bg-gray-800 text-white flex justify-between md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            Toggle Sidebar
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}
