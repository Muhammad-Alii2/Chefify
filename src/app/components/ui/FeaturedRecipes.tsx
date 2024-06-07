
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './moving-border'
function FeaturedRecipes() {
  return (
    <div className="py-12 bg-grey-900">
      <div>
        <div className='text-center'>
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Recipes</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl" >Choose the best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grig-cols-3 gap-8 justify-center'>test

        </div>
      </div>
      <div className='mt-20 text-center'>
       <Button className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 g-white hover:bg-gray-100 transition duration-200'>
       View All Recipes</Button>
      </div>
    </div>
  
  )
}

export default FeaturedRecipes