import { useState } from 'react'
import './style.css';
import Card from './components/Card.jsx';

export default function App() {

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
      <div className='grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-4 
        w-screen h-auto px-10 md:px-20 mt-8 justify-items-center'
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}