import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";

export default function AccountentDash({ children }) {
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
              <Link to="/dashboard/infor-collector">
                <li className="p-4  rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700">
                  Dashboard
                </li>
              </Link>
              <Link to="/dashboard/infor-collector/fill-new-information">
                <li className="p-4  rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700">
                  See List of Admission To be Done
                </li>
              </Link>

              <Link to="/dashboard/infor-collector/manage-information">
                <li className="p-4   rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700">
                  Manage Admissions Information
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
          <div className="max-h-screen overflow-y-scroll ">{children}</div>
        </div>
      </div>
    </>
  );
}
