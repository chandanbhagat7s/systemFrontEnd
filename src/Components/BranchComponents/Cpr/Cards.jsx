import axios from "axios";
import React from "react";

const Cards = ({ data, confirmer }) => {
  function handleCancle(params) {
    const res = confirm("do you want to delete this applicant");

    console.log(res);
  }
  async function handleApprovel(params) {
    const res = confirm("do you want to approve this applicant");
    if (res) {
      // const res = await axios.patch("/api/v1/crp/confirmAdmission", {
    }
    console.log(res);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg sm:text-sm">
      {Object.entries(data).map((el) => {
        return (
          <div key={el}>
            <p className="text-gray-700 mb-1">
              <strong>{el[0]}:</strong> {el[1]}
            </p>
          </div>
        );
      })}
      {confirmer && (
        <>
          <div className="flex flex-col space-y-2 mt-2 transition ease-in-out ">
            <button
              className="p-2 rounded-xl font-bold bg-green-400 text-sm text-gray-700 hover:text-white hover:scale-110 hover:bg-green-500"
              onClick={handleApprovel}
            >
              Approve Applicant
            </button>
            <button
              className="p-2 rounded-xl font-bold bg-red-400 text-sm text-gray-700 hover:scale-110 hover:text-white hover:bg-red-500"
              onClick={handleCancle}
            >
              Cancel Applicant
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
