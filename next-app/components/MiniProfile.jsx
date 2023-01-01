import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex space-x-3 p-2'>
        <div className="">
            <img src="avatar.png" alt="" className="w-12 h-12 rounded-full" />
        </div>
        <div className="">
          <h3 className="text-medium font-semibold text-gray-500">Welcome Back</h3>
          <span className='text-xs text-gray-800 -mt-1'>0x32h...2h23</span>
        </div>
    </div>
  )
}

export default MiniProfile