import { useState } from 'react'
import { BiDotsHorizontalRounded  } from 'react-icons/bi';
import '../style.css';

export default function Card({screenWidth, data}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(false);
  const mdScreenW = 768;
  const notExpandedHeight = screenWidth < mdScreenW ? 'h-40' : 'h-60';
  const expandedHeight = screenWidth < mdScreenW ? 'h-72' : 'h-96';

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}
      className={`w-40 md:w-64
      ${!isExpanded && notExpandedHeight}
      ${isExpanded && expandedHeight}
      ${!isExpanded && 'hover:scale-105'} hover:cursor-pointer
      flex flex-col items-center justify-between p-2
      bg-slate-800 rounded-md md:rounded-xl outline-1 outline-slate-600
      transition-[max-height] duration-400 ease-in-out 
      transition-transform duration-300`}
    > 
      <div className='relative flex flex-col items-center'>
        <button className='absolute size-6
          top-2 right-2
          flex items-center justify-center text-xl
          bg-slate-800 text-neutral-300 rounded-md
          hover:bg-slate-900 hover:cursor-pointer'
          onClick={(e) => {setDisplayOptions(!displayOptions), e.stopPropagation()}}
        ><BiDotsHorizontalRounded /></button>
        <div className={`absolute ${displayOptions? 'flex' : 'hidden'} flex-col
          w-16 top-8 right-2
          bg-slate-800 rounded-md`}> 
          <button className='bg-none text-neutral-300 hover:bg-slate-900 hover:cursor-pointer rounded-t-md'
          onClick={(e) => {setDisplayOptions(!displayOptions), e.stopPropagation()}}>Share</button>
          <button className='bg-none text-neutral-300 hover:bg-slate-900 hover:cursor-pointer'
          onClick={(e) => {setDisplayOptions(!displayOptions), e.stopPropagation()}}>Edit</button>
          <button className='bg-none text-neutral-300 hover:bg-slate-900 hover:cursor-pointer rounded-b-md'
          onClick={(e) => {setDisplayOptions(!displayOptions), e.stopPropagation()}}>Delete</button>
        </div>

        <img src={data.image} alt={data.title}
          className='w-full aspect-[5/3] object-cover rounded-lg mb-2'
        />
        <h1 className='text-center 
          text-xs md:text-lg
          text-neutral-300 font-medium'
        >{data.title}</h1>
        {isExpanded && <p className='text-neutral-300 text-xs md:text-sm font-medium mt-2 px-2 md:px-4'
        >{data.description}</p>}
      </div>
      
      <div className='flex flex-col items-end'>
        {isExpanded && <p className='text-slate-700 text-xs font-medium mt-5'>{data.date}</p>}
        <a onClick={(e) => e.stopPropagation()} 
          target="_blank" rel="noopener noreferrer"
          className={`text-center
          text-xs md:text-md font-medium
          ${isExpanded ? 'text-slate-400' : 'text-slate-700'}
          hover:text-slate-400 hover:underline`}
          href={data.url}
        >{isExpanded ? data.url : screenWidth <= mdScreenW ? data.url.slice(0, 25) : data.url.slice(0, 30)}</a>
      </div>
    </div>
  )
}