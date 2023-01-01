import React, {useState, useEffect} from 'react'
import Stories from "../components/Stories";
import MiniProfile from "../components/MiniProfile";
import Suggestions from "../components/Suggestions";
import Posts from './Posts';
import { useAppContext } from '../context/context';

const Feed = () => {
    const {} = useAppContext()
  return (
    <main className=" mt-6 max-w-5xl mx-auto flex justify-between px-8 gap-8">
    <section className="flex-grow  overflow-x-scroll scrollbar-hide max-w-[470px] ">
      <Stories />
      <Posts /> 
    </section>

    <section className="hidden md:inline-flex  rounded-md shadow-md py-3 w-[300px]">
      <div className="">
        <MiniProfile />
        <Suggestions />
      </div>
    </section>
  </main>
  )
}

export default Feed