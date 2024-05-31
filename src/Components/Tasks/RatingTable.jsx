import React, { useState } from "react";

const RatingTable = ({ scores, setScores }) => {
  const handleInputChange = (e) => {
    const { name, value, max } = e.target;
    if (Number(value) > Number(max)) {
      return;
    }
    console.log(e);
    setScores({ ...scores, [name]: value });
  };

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Sr. No</th>
            <th className="border border-gray-300 p-2">Parameters</th>
            <th className="border border-gray-300 p-2">Standard Score</th>
            <th className="border border-gray-300 p-2">Score obtained</th>
          </tr>
        </thead>
        <tbody>
          {/* Repeat for each row */}
          {[
            {
              id: 1,
              parameters:
                "Academic & Non-Academic Planning and Academic Delivery co-ordination",
              name: "Academic & Non-Academic Planning and Academic Delivery co-ordination",
              standardScore: 8,
            },
            {
              id: 2,
              parameters: "Faculty Co-ordinations",
              name: "Faculty Co-ordinations",
              standardScore: 8,
            },
            {
              id: 3,
              parameters: "Students' Co-ordination, Counselling & Follow ups",
              name: "Students' Co-ordination, Counselling & Follow ups",
              standardScore: 8,
            },
            {
              id: 4,
              parameters: "Parents' Co-ordination, Counselling & Follow ups",
              name: "Parents' Co-ordination, Counselling & Follow ups",
              standardScore: 8,
            },
            {
              id: 5,
              parameters: "Result Analysis and efforts for Improvement",
              name: "Result Analysis and efforts for Improvement",
              standardScore: 7,
            },
            {
              id: 6,
              parameters: "Students' and Teachers' performance Reporting",
              name: "Students' and Teachers' performance Reporting",
              standardScore: 7,
            },
            {
              id: 7,
              parameters: "Documentation and Maintenance of Record",
              name: "Documentation and Maintenance of Record",
              standardScore: 7,
            },
            {
              id: 8,
              parameters:
                "Non-Academic Activities/Meetings/ Programs conducted",
              name: "Non-Academic Activities/Meetings/ Programs conducted",
              standardScore: 7,
            },
            {
              id: 9,
              parameters: "Innovations suggested for better Administration",
              name: "Innovations suggested for better Administration",
              standardScore: 5,
            },
            {
              id: 10,
              parameters: "Special efforts taken for better Academic Results",
              name: "Special efforts taken for better Academic Results",
              standardScore: 5,
            },
            {
              id: 11,
              parameters: "Special Efforts for Retention of Students",
              name: "Special Efforts for Retention of Students",
              standardScore: 5,
            },
            {
              id: 12,
              parameters:
                "Reporting of Students' Expectations Lacunas in System",
              name: "Reporting of Students' Expectations Lacunas in System",
              standardScore: 5,
            },
            {
              id: 13,
              parameters:
                "Relationship maintained (with Students, Parents, Staff Members, Management)",
              name: "Relationship maintained (with Students, Parents, Staff Members, Management)",
              standardScore: 5,
            },
            {
              id: 14,
              parameters: "Mandatory Admissions done",
              name: "Mandatory Admissions done",
              standardScore: 5,
            },
            {
              id: 15,
              parameters: "All Types of Requirement decisions and fulfillment",
              name: "All Types of Requirement decisions and fulfillment",
              standardScore: 5,
            },
            {
              id: 16,
              parameters: "Timely Reporting to Management",
              name: "Timely Reporting to Management",
              standardScore: 5,
            },
          ].map((task) => (
            <tr key={task.id}>
              <td className="border border-gray-300 p-2">{task.id}</td>
              <td className="border border-gray-300 p-2">{task.parameters}</td>
              <td className="border border-gray-300 p-2">
                {task.standardScore}
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  name={task.name}
                  value={scores[task.name]}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-1 w-full"
                  max={task.standardScore}
                />
              </td>
            </tr>
          ))}
          {/* <tr>
            <td className="border border-gray-300 p-2" colSpan="2">
              TOTAL
            </td>
            <td className="border border-gray-300 p-2">100</td>
            <td className="border border-gray-300 p-2">
              {Object.values(scores).reduce(
                (sum, score) => sum + Number(score),
                0
              )}
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default RatingTable;
