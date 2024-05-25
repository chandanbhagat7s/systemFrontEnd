import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { success } from "../../../Redux/slices/errorslice";

export default function CollectorFillInformation() {
  const [data, setData] = useState({});
  const [remark, setremark] = useState("");

  const dispatch = useDispatch();
  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/crp/haveNewAdmission", {
        information: data,
        remark,
      });
      console.log(res);
      if (res.data.status == "success") {
        dispatch(
          success({
            message: res.data.msg,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center align-center">
      <div className="p-4 ">
        <h2 className=" uppercase font-bold text-blue-700 text-2xl pb-5">
          Fill new applicant information
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block font-bold text-gray-700 mb-1">
              Full Name <sup className="font-bold text-red-400">*</sup>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="Full name"
              placeholder="First Middle Last"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-700 mb-1">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">
              Phone Number <sup className="font-bold text-red-400">*</sup>
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="phone"
              placeholder="98172873645"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">
              Address
            </label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="address"
              name="address"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">City</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="city"
              name="city"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">State</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="state"
              name="state"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">
              Zip Code
            </label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="123456"
              name="zip code"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block font-bold text-gray-700 mb-1 ">
              Reason <sup className="font-bold text-red-400 w-full">*</sup>
            </label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="p-2 bg-blue-200 rounded-xl text-center cursor-pointer border border-1 border-blue-700">
                In two days
              </div>
              <div className="p-2 bg-blue-200 rounded-xl text-center cursor-pointer border border-1 border-blue-700">
                Call me again to confirm
              </div>
              <div className="p-2 bg-blue-200 rounded-xl text-center cursor-pointer border border-1 border-blue-700">
                not sure..
              </div>
              <div className="p-2 bg-blue-200 rounded-xl text-center cursor-pointer border border-1 border-blue-700">
                not intrested{" "}
              </div>
            </div>
            <input
              type="text"
              name="reason"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Custom reason... or click on above tabs"
              onChange={(e) => setremark(e.target.value)}
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
