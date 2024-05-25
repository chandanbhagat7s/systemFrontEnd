import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";
import InfoCards from "../../Components/BranchComponents/Cpr/InfoCards";

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
                className={`p-4  rounded-xl  text-center hover:font-bold my-2  ${
                  tab == 1
                    ? "bg-cyan-200 text-black font-bold "
                    : "bg-cyan-600 hover:bg-cyan-700"
                } cursor-pointer`}
              >
                Dashboard
              </li>
              <li
                onClick={() => setTab(2)}
                className={`p-4  rounded-xl  text-center hover:font-bold my-2  ${
                  tab == 2
                    ? "bg-cyan-200 text-black font-bold"
                    : "bg-cyan-600 hover:bg-cyan-700"
                } cursor-pointer`}
              >
                Manage New Information
              </li>

              <li
                onClick={() => setTab(3)}
                className={`p-4  rounded-xl  text-center hover:font-bold my-2  ${
                  tab == 3
                    ? "bg-cyan-200 text-black font-bold"
                    : "bg-cyan-600 hover:bg-cyan-700"
                } cursor-pointer`}
              >
                See old Informations
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
                <InfoCards confirmer={true} />
              </>
            )}
            {tab == 3 && <>Dashboard</>}
          </div>
        </div>
      </div>
    </>
  );
}
