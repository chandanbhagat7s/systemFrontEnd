import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

export default function AdminDash({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        >
          <nav className="px-3">
            <ul>
              <Link to="/dashboard/branch-admin/home">
                <li className="p-4  rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700">
                  Dashboard
                </li>
              </Link>
              <Link to="/dashboard/branch-admin/home">
                <li className="p-4  rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700">
                  Create Accounts
                </li>
              </Link>

              <Link to="/dashboard/branch-admin/home">
                <li className="p-4   rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700">
                  Manage Accounts
                </li>
              </Link>
            </ul>
          </nav>
        </Sidebar>
        <div className="flex-1">
          <header className="p-4 bg-gray-800 text-white flex justify-between md:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              Toggle Sidebar
            </button>
          </header>
          {children}
        </div>
      </div>
    </>
  );
}
