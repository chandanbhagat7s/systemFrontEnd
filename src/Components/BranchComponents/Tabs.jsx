import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateAccountForms from "./CreateAccountForms";

const Tabs = () => {
  const [tab, setTab] = useState(1);
  function changetab(to) {
    setTab(to);
  }
  return (
    <>
      <div className="flex justify-center space-x-4 px-2 py-4 bg-gray-200 text-sm ">
        <div
          to="/form1"
          onClick={() => changetab(1)}
          className={`${
            tab == 1
              ? "bg-blue-700 hover:bg-blue-700 hover:scale-110 font-bold text-white scale-110 "
              : "bg-blue-300 "
          } px-4 cursor-pointer text-center rounded-xl py-2 hover:scale-105 hover:bg-blue-400`}
        >
          Information collector
        </div>
        <div
          to="/form2"
          onClick={() => changetab(2)}
          className={`${
            tab == 2
              ? "bg-blue-700 hover:bg-blue-700 hover:scale-110 font-bold text-white scale-110"
              : "bg-blue-300 "
          } px-4 cursor-pointer text-center rounded-xl py-2 hover:scale-105 hover:bg-blue-400`}
        >
          Information confirmer
        </div>
        <div
          to="/form3"
          onClick={() => changetab(3)}
          className={`${
            tab == 3
              ? "bg-blue-700 hover:bg-blue-700 hover:scale-110 font-bold text-white scale-110"
              : "bg-blue-300 "
          } px-4 cursor-pointer text-center rounded-xl py-2 hover:scale-105 hover:bg-blue-400`}
        >
          Accountent
        </div>
      </div>
      <div className="p-4">
        {tab == 1 && <CreateAccountForms url="" />}
        {tab == 2 && <CreateAccountForms url="" />}
        {tab == 3 && <CreateAccountForms url="" />}
      </div>
    </>
  );
};

export default Tabs;
