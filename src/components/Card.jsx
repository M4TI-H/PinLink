import { useState } from 'react'
import '../style.css';

export default function Card() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}
      className={`w-64 ${isExpanded ? 'h-auto scale-105' : 'h-52'}
      hover:scale-105 hover:cursor-pointer my-4
      flex flex-col items-center justify-between p-2
      bg-slate-800 rounded-xl outline-1 outline-slate-600`}
    > 
      <div className='flex flex-col items-center'>
        <img src='https://plus.unsplash.com/premium_photo-1668472274328-cd239ae3586f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full h-2/3 max-h-32 rounded-lg'
        />
        <h1 className={`text-neutral-300 text-md font-medium
          ${isExpanded ? 'mt-4' : 'mt-auto'}`}
        >New cafe to check out</h1>
        {isExpanded && <p className='text-neutral-300 text-sm font-medium text-justify mt-4 px-4'
        >New cafe in town. I need to check their menu in a free time.</p>}
      </div>
      
      <div className='flex flex-col items-end'>
        {isExpanded && <p className='text-slate-700 text-xs font-medium mt-5'>6 Jun 25</p>}
        <p className={`text-slate-700 text-sm font-medium
          ${isExpanded ? 'mt-auto' : 'mt-1'}`}
        >https://examplewebsite.com/</p>
      </div>
    </div>
  )
}