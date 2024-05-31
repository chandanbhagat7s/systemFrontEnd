import axios from "axios";
import RatingTable from "./RatingTable";
import { useState } from "react";
import TaskAndRatingDataBox from "./TaskAndRatingDataBox";
import { useDispatch } from "react-redux";
import { info } from "../../Redux/slices/errorslice";

const TasksRiviewAndRating = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  async function getData(params) {
    try {
      const res = await axios.get("/api/v1/task/getAllTask");

      console.log(res);
      if (res?.data?.status == "success") {
        console.log(res?.data?.data);
        setData([...res?.data?.data]);
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

  data.length == 0 && getData();

  //   useEffect(() => {}, [data]);
  return (
    <div className="bg-blue-50 text-black  p-4">
      <div className="max-w-4xl mx-auto  rounded-lg shadow-lg">
        {data.length > 0 &&
          data.map((el) => {
            console.log(el);

            return (
              <div
                key={el}
                className="bg-blue-200 px-5 py-2 rounded-lg shadow-lg my-4"
              >
                <TaskAndRatingDataBox key={el} el={el} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TasksRiviewAndRating;
