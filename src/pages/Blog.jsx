import React from 'react'
import b1 from '../assets/blog/b1.jpg'
import b2 from '../assets/blog/b2.jpg'
import b3 from '../assets/blog/b3.jpg'

const Blog = () => {
  return (
    <>
        <div className='container flex flex-col mx-auto items-center mt-12 mb-6'>
            <h1 className='text-3xl font-bold text-gray-500'>Latest Blog</h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 items-center justify-center  gap-12 md:w-4/5 lg:grid-cols-3">
           <div className='flex flex-col w-full space-y-4'>
            <img src={b1} alt="" />
            <h3 className='font-semibold text-lg text-gray-500'>Why Brands are Looking at Local Language</h3>
            <p className='text-sm text-gray-500'>By Robert Norby / 18th March 2018</p>
            <p className='text-gray-500'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....</p>

           </div>
           <div className='flex flex-col w-full space-y-4'>
            <img src={b2} alt="" />
            <h3 className='font-semibold text-lg text-gray-500'>Why Brands are Looking at Local Language</h3>
            <p className='text-sm text-gray-500'>By Robert Norby / 18th March 2018</p>
            <p className='text-gray-500'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....</p>

           </div>
           <div className='flex flex-col w-full space-y-4'>
            <img src={b3} alt="" />
            <h3 className='font-semibold text-lg text-gray-500'>Why Brands are Looking at Local Language</h3>
            <p className='text-sm text-gray-500'>By Robert Norby / 18th March 2018</p>
            <p className='text-gray-500'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....</p>

           </div>
        </div>
        
    </>
  )
}

export default Blog