import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import TaskForm from "../../Components/Tasks/TaskForm";

export default function TeacherDash({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          dashOf={"teacher's"}
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
                Submit Task
              </li>
            </ul>
          </nav>
        </Sidebar>
        <div className="flex-1 ">
          <header className="p-4 cursor-pointer bg-gray-800 text-white flex justify-between md:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              Toggle Sidebar
            </button>
          </header>
          {tab == 1 && <>Dashboard</>}

          {tab == 2 && (
            <>
              <div className="max-h-screen overflow-y-scroll flex flex-col  pt-10 ">
                <header className="App-header flex flex-col  px-5 py-2 ">
                  <h1 className="text-2xl font-bold mb-4 uppercase text-gray-600">
                    Submit Task
                  </h1>
                  <p className="text-gray-400 uppercase text-sm">
                    Need to submit 2 forms
                  </p>
                  <TaskForm />
                </header>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
