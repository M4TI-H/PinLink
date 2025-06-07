import { useState, useRef } from 'react'
import './style.css';
import Card from './components/Card.jsx';

export default function App() {
  const [addBtnContent, setAddBtnContent] = useState("+");
  const hoverTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const handleAddBtnHover = () => {
    clearTimeout(leaveTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setAddBtnContent('+ Add link');
    }, 200);
  }

  const handleAddBtnLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setAddBtnContent('+');
    }, 50);
  }

  return (
    <div className='w-screen h-screen bg-slate-900 py-4 overflow-x-hidden'>
      <div className='w-49/50 h-20 mx-auto
        flex items-center justify-between px-10
        bg-slate-950 rounded-xl'>
        <h1 className='text-2xl text-neutral-300 font-semibold'>PinLink</h1>

        <input type='text' placeholder='Search your link here' className='w-1/5 h-1/2 min-w-48
          bg-slate-900 rounded-md px-2 outline-none
          text-neutral-300 text-lg font-medium'
        />

        <select className='w-36 h-8 outline-none px-1
        text-neutral-300 bg-slate-800 rounded-md'>
          <option >Creation date ↑</option>
          <option>Creation date ↓</option>
          <option>Favorite</option>
          <option>Name ↑</option>
          <option>Name ↓</option>
        </select>
      </div>
      <div className='flex flex-wrap gap-4 
        w-screen h-auto px-10 md:px-20 mt-8 justify-items-center'
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <button onMouseEnter={handleAddBtnHover}
        onMouseLeave={handleAddBtnLeave}
        className='absolute w-16 h-16 hover:w-40 p-4
        right-1/50 bottom-1/20
        flex items-center justify-center
        text-neutral-300 text-lg
        bg-slate-800 rounded-full
        hover:cursor-pointer
        transition-all duration-300 ease-in-out'
      >{addBtnContent}</button>

    </div>
  )
}