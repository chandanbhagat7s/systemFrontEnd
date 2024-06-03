import React, { useState } from "react";
import RatingTable from "./RatingTable";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../Redux/slices/errorslice";

export default function TaskAndRatingDataBox({ el }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  const [mode, setMode] = useState("data");
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
  async function handleSubmit(taskId) {
    try {
      let rating = 0;
      Object.values(scores).map((el) => {
        if (el) {
          rating += Number(el);
        }
      });
      let res;

      if (data?.role == "PRINCIPAL") {
        res = await axios.post("/api/v1/task/submitRatingOnTaskByPrincipal", {
          taskId,
          headRatingData: scores,
          principleRatingScore: rating,
        });
      } else {
        res = await axios.post("/api/v1/task/submitRatingOnTaskByHead", {
          taskId,
          headRatingData: scores,
          HeadOfTachersRatingScore: rating,
        });
        console.log(res);
      }

      if (res.data.status == "success") {
        dispatch(
          info({
            message: res.data.msg,
          })
        );
      }
    } catch (error) {
      console.log(error);

      dispatch(
        info({
          message: "something went wrong",
        })
      );
    }
  }

  return (
    <div className="space-y-3">
      <div className="p-2 flex justify-between">
        <div className="p-1 uppercase font-bold ">
          {mode == "data" ? `Task by ` : `Rate for`}
          <span className="font-extrabold text-gray-600">
            {" "}
            {el?.byTeacher?.name}
          </span>
        </div>
        <div className="space-x-2">
          <button
            className={`px-4 py-2 rounded-full focus:outline-none transition-colors ${
              mode == "data"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setMode("data")}
          >
            Review
          </button>
          <button
            className={`px-4 py-2 rounded-full focus:outline-none transition-colors ${
              mode == "rating"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setMode("rating")}
          >
            Rating
          </button>
        </div>
      </div>

      {mode == "data" &&
        Object.entries(el?.taskData).map(([key, value], index) => {
          return (
            <>
              {value && (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold">{key}</h3>
                  <p className="text-md">{value}</p>
                  <hr className="border-blue-700 my-2" />
                </div>
              )}
            </>
          );
        })}
      {mode == "rating" && (
        <>
          <RatingTable scores={scores} setScores={setScores} />

          <div className=" flex  ">
            <button
              onClick={() => handleSubmit(el._id)}
              className=" mx-auto font-bold rounded-full px-4 py-2 hover:text-white hover:bg-blue-700   cursor-pointer bg-blue-300"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}
