import { useEffect, useState } from "react";
import Story from "./Story";
import { userData } from "../utils/data";

const Stories = () => {
  return (
    <div className="flex items-center space-x-4  bg-white border border-gray-200 p-3 rounded-sm ">
      {userData.map((user) => (
        <Story
          key={user.id}
          name={user?.name}
          userName={user?.userName}
          avatar={user?.img}
        />
      ))}
    </div>
  );
};

export default Stories;
