import React from "react";

export default function CreateAccountForms({ url }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 uppercase">
        Creating <span className="text-blue-700">Account</span>{" "}
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-bold">
            Name <sup className="text-red-400">*</sup>
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">
            Email id <sup className="text-red-400">*</sup>
          </label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">
            Password <sup className="text-red-400">*</sup>
          </label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900 hover:text-white hover:font-bold hover:scale-110 transition ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
