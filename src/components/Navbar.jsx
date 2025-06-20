import { useState } from 'react'
import '../style.css';

export default function Navbar({handleSearch}) {

  //function filtering displayed data based on search query
  const filterOnSearch = (e) => { 
    const query = e.target.value;
    handleSearch(query);
  }

  return (
    <div className='
      min-h-20 w-full md:w-96/100 md:max-w-[1800px] 
      mx-auto md:mt-4
      flex items-center justify-between px-2 sm:px-4 md:px-10
      bg-slate-950 md:rounded-xl'
    >
      <div className='flex flex-row items-center gap-2 md:gap-8 w-full h-full'>
        <h1 className='text-2xl text-neutral-300 font-semibold'>PnLk</h1>
        <input type='text' 
          onChange={filterOnSearch}
          placeholder='Search your link here' 
          className='
          h-1/2 w-1/2 lg:w-1/4 focus:w-2/3 lg:focus:w-1/3
          bg-slate-900 rounded-md px-2
          text-neutral-300 text-sm md:text-lg font-medium
          focus:outline-2 outline-slate-600
          transition-[width] duration-400 ease-in-out'
        />
      </div>
      <select className='
        h-1/2 w-1/5 min-w-10 md:w-1/12 md:min-w-32
        outline-none px-1 text-sm
        text-neutral-300 bg-slate-800 rounded-md'
      >
        <option>Creation date ↑</option>
        <option>Creation date ↓</option>
        <option>Favorite</option>
        <option>Name ↑</option>
        <option>Name ↓</option>
      </select>
    </div>
  )
}