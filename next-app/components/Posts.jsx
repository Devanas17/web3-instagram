import React, { useEffect } from 'react'
import { useAppContext } from '../context/context'

const Posts = () => {
  const {getAllPosts} = useAppContext()

  useEffect(() => {
    getAllPosts()
  }, [])
  return (
    <div className='mt-2'>Posts</div>
  )
}

export default Posts