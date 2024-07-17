import React from 'react';
import CategoryItem from './CategoryItem';

const CategoriesList = ({ categories }) => {
  return (
    <div className='w-screen mt-5'>
      <h1 className='text-2xl font-medium text-black text-center'>¿Qué estás buscando?</h1>
      <div className='px-3 flex items-center justify-center gap-2 flex-wrap mt-5'>
        {categories.map(category => (
          <CategoryItem key={category.key} category={category} />
        ))}
      </div>
    </div>
  )
}

export default CategoriesList