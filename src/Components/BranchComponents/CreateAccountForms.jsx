import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { error, success, warning } from "../../Redux/slices/errorslice";

export default function CreateAccountForms({ url }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
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
      if (!data.name || !data.email || !data.password) {
        return dispatch(
          warning({
            message: "Please enter all the details",
          })
        );
      }
      if (data.password.length < 8) {
        return dispatch(
          warning({
            message: "Password is too short",
          })
        );
      }
      const res = await axios.post(url, {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log(res);
      if (res?.data?.status == "success") {
        console.log(res);
        setData({
          name: "",
          email: "",
          password: "",
        });
        return dispatch(
          success({
            message: res.data.msg,
          })
        );
      }
    } catch (err) {
      if (err?.response?.data?.status == "fail") {
        return dispatch(
          error({
            message: err?.response?.data?.msg,
          })
        );
      }
      // console.log(err);
      return dispatch(
        error({
          message: "something went wrong",
        })
      );
    }
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 uppercase">
        Creating <span className="text-blue-700">Account</span>{" "}
      </h2>
      <form className="space-y-4 w-2/2 lg:w-2/3 mx-auto">
        <div>
          <label className="block mb-1 font-bold">
            Name <sup className="text-red-400">*</sup>
          </label>
          <input
            value={data.name}
            name="name"
            onChange={handleChange}
            type="text"
            required="true"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">
            Email id <sup className="text-red-400">*</sup>
          </label>
          <input
            value={data.email}
            name="email"
            onChange={handleChange}
            type="email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">
            Password <sup className="text-red-400">*</sup>
          </label>
          <input
            value={data.password}
            name="password"
            onChange={handleChange}
            type="password"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900 hover:text-white hover:font-bold hover:scale-110 transition ease-in-out"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
