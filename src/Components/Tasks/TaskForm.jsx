import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { error } from "../../Redux/slices/errorslice";
import RatingTable from "./RatingTable";
import axios from "axios";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(1);
  const [data, setData] = useState({
    "Report date": "",
    "Reports of In charge Assistant Coordinator": "",
    "Remark of Reports of In charge Assistant Coordinator": "",
    "Attendance of Faculties": "",
    "Remark of Attendance of Faculties": "",
    "Students Counselling Scheduled for": "",
    "Total number of Students Counselling Scheduled": "",
    "Remark of Scheduled Counselling (Scheduled)": "",
    "Students Counselling Unscheduled for": "",
    "Total number of Students Counselling Unscheduled": "",
    "Remark of Scheduled Counselling (unScheduled)": "",
    "Students Discussion": "",
    "Remark of Students Discussion": "",
    "Weekly Test Syllabus Declaration": "",
    "Question Paper Setting follow-up from Faculties": "",
    "Faculty Discussion": "",
    "Remark of Faculty Discussion": "",
    "Parents Calling": "",
    "Total Count of Parents Calling": "",
    "Regular Meeting with Students on Academic Development": "",
    "Remark of Student Meeting": "",
    "Lecture Scheduled on ERP": "",
    "Total number of Lecture Scheduled on ERP": "",
    "Follow up from Asst. Incharge": "",
    "Remark of Follow up from Asst. Incharge": "",
    "General Remark": "",
  });

  const [scores, setScores] = useState({
    "Academic & Non-Academic Planning and Academic Delivery co-ordination": "",
    "Faculty Co-ordinations": "",
    "Students' Co-ordination, Counselling & Follow ups": "",
    "Parents' Co-ordination, Counselling & Follow ups": "",
    "Result Analysis and efforts for Improvement": "",
    "Students' and Teachers' performance Reporting": "",
    "Documentation and Maintenance of Record": "",
    "Non-Academic Activities/Meetings/ Programs conducted": "",
    "Innovations suggested for better Administration": "",
    "Special efforts taken for better Academic Results": "",
    "Special Efforts for Retention of Students": "",
    "Reporting of Students' Expectations Lacunas in System": "",
    "Relationship maintained (with Students, Parents, Staff Members, Management)":
      "",
    "Mandatory Admissions done": "",
    "All Types of Requirement decisions and fulfillment": "",
    "Timely Reporting to Management": "",
  });

  function handlechange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !data["Report date"] ||
      !data["Reports of In charge Assistant Coordinator"] ||
      !data["Attendance of Faculties"] ||
      !data["Students Counselling Scheduled for"] ||
      !data["Students Counselling Unscheduled for"] ||
      !data["Students Discussion"] ||
      !data["Weekly Test Syllabus Declaration"] ||
      !data["Faculty Discussion"] ||
      !data["Parents Calling"] ||
      !data["Regular Meeting with Students on Academic Development"] ||
      !data["Lecture Scheduled on ERP"] ||
      !data["Follow up from Asst. Incharge"]
    ) {
      console.log("fill all the required fields");
      dispatch(
        error({
          message: "please fill all the details",
        })
      );
      return;
    }

    if (display == 1) {
      setDisplay(2);
      return;
    }

    try {
      const res = await axios.post("/api/v1/task/submitTaskWithRating", {
        taskData: data,
        teacherRatingData: scores,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    return;
  }

  // useEffect(()=>{

  // },[display])

  return (
    <>
      {display == 1 ? (
        <>
          <div className="pt-10 pb-20">
            <form className="space-y-4 p-6">
              <div>
                <label className=" font-extrabold block text-sm font-medium text-gray-700">
                  Report Date{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  onChange={handlechange}
                  name="Report date"
                  type="date"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Reports of In charge Assistant Coordinator{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Reports of In charge Assistant Coordinator"
                >
                  <option value="">--Select--</option>
                  <option value="XI-I JEE">XI-I JEE</option>
                  <option value="XI-II JEE">XI-II JEE</option>
                  <option value="XI-III JEE">XI-III JEE</option>
                  <option value="XII JEE">XII JEE</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Remark of Reports of In charge Assistant Coordinator
                </label>
                <input
                  onChange={handlechange}
                  name="Remark of Reports of In charge Assistant Coordinator"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Attendance of Faculties{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Attendance of Faculties"
                >
                  <option value="">--Select--</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Maths">Maths</option>
                  <option value="Biology">Biology</option>
                  <option value="English">English</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Remark of Attendance of Faculties
                </label>
                <input
                  onChange={handlechange}
                  type="text"
                  name="Remark of Attendance of Faculties"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Students Counselling Scheduled for{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Students Counselling Scheduled for"
                >
                  <option value="">--Select--</option>
                  <option value="XI-I JEE">XI-I JEE</option>
                  <option value="XI-II JEE">XI-II JEE</option>
                  <option value="XI-III JEE">XI-III JEE</option>
                  <option value="XII JEE">XII JEE</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Total number of Students Counselling Scheduled
                </label>
                <input
                  onChange={handlechange}
                  name="Total number of Students Counselling Scheduled"
                  type="number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Remark of Scheduled Counselling
                </label>
                <input
                  onChange={handlechange}
                  name="Remark of Scheduled Counselling (Scheduled)"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Students Counselling Unscheduled for{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Students Counselling Unscheduled for"
                >
                  <option value="">--Select--</option>
                  <option value="XI-I JEE">XI-I JEE</option>
                  <option value="XI-II JEE">XI-II JEE</option>
                  <option value="XI-III JEE">XI-III JEE</option>
                  <option value="XII JEE">XII JEE</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Total number of Students Counselling Unscheduled
                </label>
                <input
                  onChange={handlechange}
                  name="Total number of Students Counselling Unscheduled"
                  type="number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Remark of Scheduled Counselling
                </label>
                <input
                  onChange={handlechange}
                  name="Remark of Scheduled Counselling (unScheduled)"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Students Discussion{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Students Discussion"
                >
                  <option value="">--Select--</option>
                  <option value="XI-I JEE">XI-I JEE</option>
                  <option value="XI-II JEE">XI-II JEE</option>
                  <option value="XI-III JEE">XI-III JEE</option>
                  <option value="XII JEE">XII JEE</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Remark of Students Discussion
                </label>
                <input
                  onChange={handlechange}
                  name="Remark of Students Discussion"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Weekly Test Syllabus Declaration{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Weekly Test Syllabus Declaration"
                >
                  <option value="">--Select--</option>
                  <option value="XI-I JEE">XI-I JEE</option>
                  <option value="XI-II JEE">XI-II JEE</option>
                  <option value="XI-III JEE">XI-III JEE</option>
                  <option value="XII JEE">XII JEE</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Question Paper Setting follow-up from Faculties
                </label>
                <input
                  onChange={handlechange}
                  name="Question Paper Setting follow-up from Faculties"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Faculty Discussion{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Faculty Discussion"
                >
                  <option value="">--Select--</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Maths">Maths</option>
                  <option value="Biology">Biology</option>
                  <option value="English">English</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Remark of Faculty Discussion
                </label>
                <input
                  onChange={handlechange}
                  name="Remark of Faculty Discussion"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Parents Calling{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Parents Calling"
                >
                  <option value="">--Select--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Total Count of Parents Calling
                </label>
                <input
                  onChange={handlechange}
                  name="Total Count of Parents Calling"
                  type="number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Regular Meeting with Students on Academic Development{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Regular Meeting with Students on Academic Development"
                >
                  <option value="">--Select--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Remark of Student Meeting
                </label>
                <input
                  onChange={handlechange}
                  name="Remark of Student Meeting"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Lecture Scheduled on ERP{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Lecture Scheduled on ERP"
                >
                  <option value="">--Select--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Total number of Lecture Scheduled on ERP
                </label>
                <input
                  onChange={handlechange}
                  name="Total number of Lecture Scheduled on ERP"
                  type="number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Follow up from Asst. Incharge{" "}
                  <span className="font-extrabold text-red-700 ">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  onChange={handlechange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  name="Follow up from Asst. Incharge"
                >
                  <option value="">--Select--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  Remark of Follow up from Asst. Incharge
                </label>
                <input
                  onChange={handlechange}
                  name="Remark of Follow up from Asst. Incharge"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className=" font-bold block text-sm font-medium text-gray-700">
                  General Remark
                </label>
                <input
                  onChange={handlechange}
                  name="General Remark"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div className="relative ">
                <button
                  onClick={handleSubmit}
                  className="absolute right-0 font-bold rounded-full px-4 py-2 hover:text-white hover:bg-blue-700   cursor-pointer bg-blue-300"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <RatingTable scores={scores} setScores={setScores} />
        </>
      )}

      {display == 2 && (
        <>
          <div className="relative ">
            <button
              onClick={handleSubmit}
              className="absolute right-0 font-bold rounded-full px-4 py-2 hover:text-white hover:bg-blue-700   cursor-pointer bg-blue-300"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default TaskForm;
