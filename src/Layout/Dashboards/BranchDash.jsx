import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";
import CreateAccounts from "../../Components/BranchComponents/CreateAccounts";

export default function BranchDash({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        >
          <nav className="px-3">
            <ul>
              <li
                className={`p-4 bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700 ${
                  tab == 1 ? "bg-blue-700 font-bold hover:bg-blue-700 " : ""
                } cursor-pointer rounded-xl `}
                onClick={() => setTab(1)}
              >
                Dashboard
              </li>

              <li
                onClick={() => setTab(2)}
                className={`p-4 ${
                  tab == 2 ? "bg-blue-700 font-bold hover:bg-blue-700 " : ""
                } cursor-pointer  rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700`}
              >
                Create Accounts
              </li>

              <li
                onClick={() => setTab(3)}
                className={`p-4 ${
                  tab == 3 ? "bg-blue-700 font-bold hover:bg-blue-700 " : ""
                } cursor-pointer   rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700`}
              >
                Manage Accounts
              </li>
            </ul>
          </nav>
        </Sidebar>
        <div className="flex-1">
          <header className="p-4 cursor-pointer bg-gray-800 text-white flex justify-between md:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              Toggle Sidebar
            </button>
          </header>
          {tab == 1 && <>Dashboard</>}
          {tab == 2 && (
            <>
              <CreateAccounts />
            </>
          )}
          {tab == 3 && <>Manage Accounts</>}
        </div>
      </div>
    </>
  );
}
