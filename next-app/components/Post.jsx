import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import {FiSend} from "react-icons/fi"
import {RiMoneyDollarCircleLine} from "react-icons/ri"

const Post = ({author, caption, image, totalTip}) => {
  return (
    <div className='bg-white border-2 border-gray-100 rounded-md p-3 mt-5'>
      <div className="flex items-center justify-between">
        <p className="trucate w-[80px] text-black">{author}</p>
        <p className="">See All</p>
      </div>

      <div className="relative flex-grow h-full w-full mx-auto p-3">
        <img src={image} className='h-full w-full rounded-md' alt="" />
      </div>

      <div className="mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
          <AiOutlineHeart className='h-6 w-6' />
          <FaRegComment className='h-6 w-6'/>
          <FiSend className='h-6 w-6' />
          </div>

          <div className="">
            
            <RiMoneyDollarCircleLine className='h-6 w-6' />
          </div>
        </div>
        <div className="mt-2">
          <p className="font-semibold text-xs">34 Likes</p>
          <div className="flex items-center space-x-4">
            <h4 className="font-semibold text-sm">0x2fc...fhw3</h4>
            <p className="text-sm text-gray-600">{caption}</p>
          </div>
        </div>
        <div className="mt-2 h-8 w-full ">
          <input type="text" className="bg-none outline-none w-full h-full placeholder:text-gray-400 text-gray-600 text-sm" placeholder='leave a comment' />
        </div>
      </div>
    </div>
  )
}

export default Post