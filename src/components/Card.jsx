import { useState } from 'react'
import '../style.css';

export default function Card({screenWidth, data}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}
      className={`
      w-28 md:w-64 h-full 
      ${isExpanded ? 'max-h-96' : 'max-h-56'}
      ${!isExpanded && 'hover:scale-105'} hover:cursor-pointer
      flex flex-col items-center justify-between p-2
      bg-slate-800 rounded-md md:rounded-xl outline-1 outline-slate-600
      transition-[max-height] duration-400 ease-in-out 
      transition-transform duration-300`}
    > 
      <div className='flex flex-col items-center'>
        <img src='https://plus.unsplash.com/premium_photo-1668472274328-cd239ae3586f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full aspect-[5/3] object-cover rounded-lg mb-2'
        />
        <h1 className='text-center 
          text-xs md:text-lg 
          text-neutral-300 font-medium'
        >New cafe to check out</h1>
        {isExpanded && <p className='text-neutral-300 text-sm font-medium text-justify mt-4 px-4'
        >New cafe in town. I need to check their menu in a free time.</p>}
      </div>
      
      <div className='flex flex-col items-end'>
        {isExpanded && <p className='text-slate-700 text-xs font-medium mt-5'>{data.date}</p>}
        <a onClick={(e) => e.stopPropagation()} 
          target="_blank" rel="noopener noreferrer"
          className='text-center
          text-[8px] md:text-sm font-medium mt-2
          text-slate-700 
          hover:text-slate-400 hover:underline'
          href="https://facebook.com/"
        >{data.url}</a>
      </div>
    </div>
  )
}