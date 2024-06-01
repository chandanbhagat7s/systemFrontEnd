import axios from "axios";
import { useState } from "react";

const TaskList = () => {
  const [data, setData] = useState([]);

  async function getAllData() {
    const res = await axios.get("");
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex">
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">Card Title</h2>
        <p className="text-gray-700 mb-2">
          This is the first paragraph of the card. It provides a brief
          introduction to the content of the card.
        </p>
        <p className="text-gray-700">
          This is the second paragraph of the card. It provides additional
          details and information.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
