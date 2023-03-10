import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/context'
import Post from './Post'

const Posts = () => {
  const {getAllPosts, ethereumClient} = useAppContext()
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await getAllPosts();
    data.reverse()
    console.log("All Posts", data)
    setPosts(data);
  };


  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div className='my-4  w-full'>
      {posts.map(post => (
        <Post key={post.pId} author={post?.author} caption={post?.caption} image={post?.image} totalTip={post?.totalTip} id={post.pId} />
      ))}
    </div>
  )
}

export default Posts