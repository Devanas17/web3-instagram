import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/context'
import Post from './Post'

const Posts = () => {
  const {getAllPosts} = useAppContext()
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await getAllPosts();
    console.log("All Posts", data)
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div className='my-4  w-full'>
      {/* <Post  title="All Posts" posts={posts} /> */}
      {posts.map(post => (
        <Post key={post.pId} author={post?.author} caption={post?.caption} image={post?.image} totalTip={post?.totalTip} />
      ))}
    </div>
  )
}

export default Posts