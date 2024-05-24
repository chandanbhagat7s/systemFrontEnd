import React from "react";

const DeniedAccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-6">Denied Access</h1>
      <button
        // onClick={navigateHome}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default DeniedAccess;
