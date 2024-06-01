import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Filters({ query, setQuery }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [teacherList, setTeacherList] = useState([]);

  async function getListOfTeachers() {
    const res = await axios.get("/api/v1/task/getAllTeachersData");
    console.log(res);
    if (res?.data?.status == "success") {
      setTeacherList([...res.data.data]);
    }
  }

  function handleQuery(e) {
    if (teacherList.length == 0) {
      return;
    }
    const { value } = e.target;
    console.log(value, teacherList[0].branchData);
    setQuery({
      branch: teacherList[0].branchData,
      teachersId: value,
    });
  }

  const filteredItems = teacherList.filter((item) => {
    console.log(item.name);
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  useEffect(() => {
    getListOfTeachers();
  }, []);
  return (
    <>
      <div className="p-2 flex flex-col lg:flex-row justify-around w-2/2">
        <input
          type="text"
          className="lg:w-1/3 w-2/2  p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <ul className="bg-white rounded-lg shadow">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="p-2 border-b border-gray-200 last:border-b-0"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-center text-gray-500">No results found</li>
          )}
        </ul> */}
        <select
          className="w-2/2 lg:w-1/3  p-2 border border-gray-300 rounded"
          // value={selectedOption}
          onChange={handleQuery}
        >
          <option value={""}>--Teacher's List--</option>
          {teacherList.length > 0 &&
            teacherList.map((option) => (
              <option
                key={option._id}
                value={option._id}
                name={option.branchData}
                onClick={handleQuery}
              >
                {option.name}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}
