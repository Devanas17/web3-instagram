import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex space-x-3 p-2'>
        <div className="">
            <img src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-10 h-10 rounded-full" />
        </div>
        <div className="">
          <h3 className="text-medium font-semibold text-gray-500">Welcome Back</h3>
          <span className='text-xs text-gray-800 -mt-1'>0x32h...2h23</span>
        </div>
    </div>
  )
}

export default MiniProfile