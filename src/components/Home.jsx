import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gray-900'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-gray-100'>Zachary</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I build things for the web</h2>
          <p className='text-gray-400 py-4 max-w-[700px]'>I'm a front-end developer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I'm focused on building
            responsive full-stack web applications.</p>
            <div>
              <button className='text-gray-100 group rounded-lg bg-pink-600 px-6 py-3 my-2 flex items-center hover:bg-pink-700'>View Work 
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 '/>
              </span>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Home