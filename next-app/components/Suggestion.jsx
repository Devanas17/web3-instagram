import React from 'react'

const Suggestion = ({name, userName, avatar}) => {
  return (
    <div className='flex justify-between space-x-2 mt-4 w-[full] hover:bg-gray-100 transition duration-200 ease-out hover:cursor-pointer p-1 '>
        <div className="flex space-x-3 items-center">
        <img src={avatar} alt="avatar" className="h-8 w-8 rounded-full" />
        <div className="">
            <h3 className="text-sm font-medium text-gray-800">{userName}</h3>
            <h3 className="text-sm text-gray-400">{name}</h3>
        </div>
        </div>
        <p className="text-blue-400 text-sm justify-end">Follow</p>
    </div>
  )
}

export default Suggestion