import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="flex items-center space-x-4 overflow-x-scroll bg-white border border-gray-200 rounded-sm scrollbar-thin scrollbar-thumb-black scrollbar-hide">
      <Story />
    </div>
  );
};

export default Stories;
