import React, { forwardRef } from 'react'
import product1 from '../assets/populer-products/p1.png'
import product2 from '../assets/populer-products/p2.png'
import product3 from '../assets/populer-products/p3.png'

const Card = () => {
  return (
    <div  className='container mx-auto my-6 flex flex-col md:flex-row items-center gap-2  md:w-4/5'>
         <div className='flex flex-col mx-2 py-12 items-center md:h-[300px] bg-slate-50 '>
            <img src={product1} alt="" />
            <h2 className='text-xl text-gray-500 font-semibold py-4 hover:text-yellow-500 cursor-pointer'> Arm Chair</h2>
            <p className='text-gray-500 font-md text-center px-12'>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut</p>
         </div>
         <div className='flex flex-col lg:justify-center md:h-[300px] items-center  mx-6 lg:flex-row gap-5 lg:w-4/5 bg-slate-50'>
            <div className='flex justify-center items-center py-4 m-2 w-1/2'>
            <img src={product2} alt="" />
            </div>
            <div className='flex flex-col py-6 items-center md:items-start'>
                <h2 className='text-xl font-semibold pt-6 pb-2 hover:text-yellow-500 cursor-pointer text-gray-500'>latest designed stool and chair</h2>
                <p className='text-md text-gray-500 pt-2 md:pr-6'>Edi ut perspiciatis unde omnis iste natusina error sit voluptatem accusantium doloret mque laudantium, totam rem aperiam.</p>
                <p className='py-6 font-semibold text-gray-500'>Sales Start from <span className='text-yellow-500'>$99.00</span></p>
                <button className='px-4 py-3 border-2 font-semibold text-gray-500 hover:text-yellow-500 cursor-pointer hover:border-yellow-500'>Discover More</button>
            </div>
         </div>
         <div className='flex flex-col mx-2 py-6 items-center md:h-[300px] bg-slate-50 hover:text-yellow-500'>
            <img src={product3} alt="" />
            <h2 className='text-xl text-gray-500 font-semibold py-2 hover:text-yellow-500 cursor-pointer'>hanging lamp</h2>
            <p className='text-gray-500 font-md text-center px-12'>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut</p>
         </div>
    </div>
  )
}

export default forwardRef (Card)