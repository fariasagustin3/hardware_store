import React from 'react'

const CategoryItem = ({ category }) => {
  return (
    <div className='max-w-[200px] max-h-[200px] bg-white px-5 py-5 rounded-md shadow-lg overflow-hidden cursor-pointer'>
      <div className='flex flex-col'>
        <img src={category.image} alt="" className='w-full h-full' />
        <h2 className='text-black font-medium text-lg text-center mt-5'>{category.name}</h2>
      </div>
    </div>
  )
}

export default CategoryItem