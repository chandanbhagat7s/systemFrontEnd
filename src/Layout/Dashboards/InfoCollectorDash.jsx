import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";
import CollectorFillInformation from "../../Components/BranchComponents/Cpr/CollectorFillInformation";

export default function InfoCollectorDash({ children }) {
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
            <ul className="space-y-2 ">
              <li
                onClick={() => setTab(1)}
                className={`p-4  rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700 ${
                  tab == 1 ? "bg-cyan-800 hover:bg-cyan-800 font-bold" : ""
                } cursor-pointer`}
              >
                Dashboard
              </li>
              <li
                onClick={() => setTab(2)}
                className={`p-4  rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700 ${
                  tab == 2 ? "bg-cyan-800 hover:bg-cyan-800 font-bold" : ""
                } cursor-pointer`}
              >
                Have New Information
              </li>

              <li
                onClick={() => setTab(3)}
                className={`p-4   rounded-xl bg-gray-900 text-center hover:font-bold my-2 hover:bg-gray-700 ${
                  tab == 3 ? "bg-cyan-800 hover:bg-cyan-800 font-bold" : ""
                } cursor-pointer`}
              >
                Manage Informations
              </li>
            </ul>
          </nav>
        </Sidebar>
        <div className="flex-1">
          <header className="p-4 bg-gray-800 text-white flex justify-between md:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              Toggle Sidebar
            </button>
          </header>
          <div className="max-h-screen overflow-y-scroll ">
            {tab == 1 && <>Dashboard</>}
            {tab == 2 && (
              <>
                <CollectorFillInformation />
              </>
            )}
            {tab == 3 && <>Dashboard</>}
          </div>
        </div>
      </div>
    </>
  );
}
