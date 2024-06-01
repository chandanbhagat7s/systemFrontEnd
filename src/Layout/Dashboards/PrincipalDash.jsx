import { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import TasksRiviewAndRating from "../../Components/Tasks/TasksRiviewAndRating";
import TaskList from "../../Components/Tasks/TaskList";

export default function PrincipalDash({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          dashOf="PRINCIPAL"
        >
          <nav className="px-3">
            <ul>
              <li
                className={`p-4  text-center hover:font-bold my-2  ${
                  tab == 1
                    ? "bg-blue-700 font-bold hover:bg-blue-700 "
                    : "hover:bg-gray-700 bg-gray-900"
                } cursor-pointer rounded-xl `}
                onClick={() => setTab(1)}
              >
                Dashboard
              </li>

              <li
                onClick={() => setTab(2)}
                className={`p-4 ${
                  tab == 2
                    ? "bg-blue-700 font-bold hover:bg-blue-700 "
                    : "hover:bg-gray-700  bg-gray-900 "
                } cursor-pointer  rounded-xl text-center hover:font-bold my-2 `}
              >
                Review submitted Task
              </li>
              <li
                onClick={() => setTab(3)}
                className={`p-4 ${
                  tab == 3
                    ? "bg-blue-700 font-bold hover:bg-blue-700 "
                    : "hover:bg-gray-700  bg-gray-900 "
                } cursor-pointer  rounded-xl text-center hover:font-bold my-2 `}
              >
                Task List
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
            <div className="max-h-screen overflow-y-scroll">
              <TasksRiviewAndRating />
            </div>
          )}
          {tab == 3 && (
            <>
              <TaskList />
            </>
          )}
        </div>
      </div>
    </>
  );
}
