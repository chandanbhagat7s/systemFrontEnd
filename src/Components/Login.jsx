import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginForm } from "../Redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { success, warning } from "../Redux/slices/errorslice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(name, value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!data.email || !data.password) {
      console.log("error");
      return;
    }
    const res = await dispatch(loginForm(data));
    if (res?.payload?.data?.status == "success") {
      dispatch(
        success({
          message: "Logged in successfully",
        })
      );
      const role = res?.payload?.data?.data?.role;
      if (role == "BRANCH_ADMIN") {
        nevigate("/dashboard/branch-admin");
      } else if (role == "CPR_COLLECTOR") {
        nevigate("/dashboard/infor-collector");
      } else if (role == "CPR_CONFIRMER") {
        nevigate("/dashboard/admission-confirmer");
      } else if (role == "CPR_ACCOUNTENT") {
        nevigate("/dashboard/accountent");
      } else if (role == "ADMIN") {
        nevigate("/dashboard/main-admin");
      } else if (role == "TEACHER") {
        nevigate("/dashboard/teacher");
      } else if (role == "TEACHERS_HEAD") {
        nevigate("/dashboard/teachers-head");
      }
    } else {
      dispatch(
        warning({
          message: res.payload.data.msg,
        })
      );
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-600 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center ">LOGIN</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              name="email"
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              name="password"
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
