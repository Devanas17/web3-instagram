import React, {useState, useEffect} from "react";
import { userData } from "../utils/data";
import Suggestion from "./Suggestion";

const Suggestions = () => {
  return (
    <div className="w-[300px] px-3 ">
      <div className="flex justify-between space-x-5 w-full">
        <h4 className="font-semibold text-gray-800 text-sm justify-start">
          Recommendation for you{" "}
        </h4>
        <p className="text-gray-400 text-sm justify-end">See All</p>
      </div>
      {userData.map((user) => (
        <Suggestion
          key={user.id}
          name={user?.name}
          userName={user?.userName}
          avatar={user?.img}
        />
      ))}
    </div>
  );
};

export default Suggestions;
