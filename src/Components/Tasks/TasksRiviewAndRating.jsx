import axios from "axios";
import { useEffect, useState } from "react";
import TaskAndRatingDataBox from "./TaskAndRatingDataBox";
import { useDispatch, useSelector } from "react-redux";
import { error, info } from "../../Redux/slices/errorslice";
import Filters from "./Filters";
import Spinner from "../Spinner";

const TasksRiviewAndRating = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const [data, setData] = useState([]);
  const [reqested, setRequested] = useState(false);
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    branch: "",
    teachersId: "",
  });

  async function getData(params) {
    try {
      const res = await axios.get("/api/v1/task/getAllTask");

      console.log(res);
      if (res?.data?.status == "success") {
        console.log(res?.data?.data);
        setData([...res?.data?.data]);
        setRequested(true);
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

  async function getQueryData(params) {
    try {
      if (!query.branch || !query.teachersId) {
        return dispatch(
          error({
            message: "Please select the options correctly",
          })
        );
      }
      const res = await axios.get(
        `/api/v1/task/${query.branch}/${query.teachersId}`
      );

      console.log(res);
      if (res?.data?.status == "success") {
        console.log(res?.data?.data);
        setData([...res?.data?.data]);
        setRequested(true);
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

  // data.length == 0 && getData();

  useEffect(() => {
    !query.teachersId ? getData() : getQueryData();
  }, [query]);
  return (
    <div className="bg-blue-50 text-black  p-4">
      <Filters query={query} setQuery={setQuery} />
      <div className="max-w-4xl mx-auto  rounded-lg shadow-lg">
        {data.length == 0 && !reqested && (
          <>
            <Spinner />
          </>
        )}
        {data.length == 0 && reqested && (
          <div className="min-h-screen flex justify-center items-center text-3xl font-bold text-blue-500 ">
            <div>No Task Found </div>
          </div>
        )}
        {data.length > 0 &&
          data.map((el) => {
            console.log(el);

            return (
              <div
                key={el}
                className="bg-blue-100 px-5 py-4 rounded-lg shadow-lg my-4"
              >
                {auth?.data?.role == "TEACHERS_HEAD" && (
                  <div className="border border-1 border-gray-400  p-2 rounded-xl">
                    {` Teacher's rating on this task is   `}
                    <span className="font-bold">
                      {el?.teachersRatingScore || "Not rated"}{" "}
                    </span>
                  </div>
                )}
                {auth?.data?.role == "PRINCIPAL" && (
                  <div className="flex flex-col space-y-2 ">
                    <div className="border border-1 border-gray-400  p-2 rounded-xl">
                      {` Teacher's rating on this task is   `}
                      <span className="font-bold">
                        {el?.teachersRatingScore || "Not rated"}{" "}
                      </span>
                    </div>
                    <div className="border border-1 border-gray-400  p-2 rounded-xl">
                      {` Head of Teacher's rating on this task is   `}
                      <span className="font-bold">
                        {el?.HeadOfTachersRatingScore || "Not rated"}{" "}
                      </span>
                    </div>
                  </div>
                )}
                <TaskAndRatingDataBox key={el} el={el} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TasksRiviewAndRating;
