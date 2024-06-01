import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-r-blue-500 border-b-black border-l-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
