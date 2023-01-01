import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment, FaEthereum } from "react-icons/fa";
import { FiSend, FiMoreHorizontal } from "react-icons/fi";
import { toast } from "react-toastify";
import { useAppContext } from "../context/context";
import Loader from "./Loader";

const Post = ({ author, caption, image, totalTip, id }) => {
  const {tipOwner, currentAcount} = useAppContext()
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const handleDonate = async () => {
    setIsLoading(true);
    await tipOwner(id + 1, amount);
    setIsLoading(false);
  };

  return (
    <div className="bg-white border-2 border-gray-100 rounded-md p-3 mt-5 ">
      {isLoading ? <Loader />: ""}
      <div className="flex items-center justify-between">
        <p className="trucate w-[80px] text-black">{author.slice(0, 5)}...{author.slice(-5)}</p>
        <FiMoreHorizontal className="w-6 h-6" />
      </div>

      <div className="relative flex-grow w-full h-full mx-auto m-5">
        <img src={image} className=" w-full rounded-md object-contain" alt="" />
      </div>

      <div className="mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <AiOutlineHeart className="h-6 w-6" />
            <FaRegComment className="h-6 w-6" />
            <FiSend className="h-6 w-6" />
          </div>

          <div className="">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full p-2 outline-none border-[1px] border-[#3a3a43] text-black text-[18px]  placeholder:text-[#4b5264] rounded-md"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <FaEthereum className="h-7 w-7 cursor-pointer" onClick={handleDonate}/>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 justify-end my-2">
          <h3 className="font-semibold text-sm">Total Tip:</h3><span className="text-xs text-gray-600">{totalTip}</span>
        </div>

        <div className="mt-2">
          <p className="font-semibold text-xs">34 Likes</p>
          <div className="flex items-center space-x-4">
            <h4 className="font-semibold text-sm">{author.slice(0,5)}...{author.slice(-5)}</h4>
            <p className="text-sm text-gray-600">{caption}</p>
          </div>
        </div>

        <div className="mt-2 h-8 w-full ">
          <input
            type="text"
            className="bg-none outline-none w-full h-full placeholder:text-gray-400 text-gray-600 text-sm"
            placeholder="leave a comment"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
