import React from 'react';

const Categories = ({categories,filterItems}) => {
  return <div className='btn-container'>
    {categories.map(categories => {
      return (<button key={categories} className='filter-btn' onClick={()=>filterItems(categories)}>{categories}</button>
    )})}
  </div>;
};

export default Categories;
