import { useState } from 'react';
import '../style.css';
import { BiX } from 'react-icons/bi';

export default function LinkFormCompact({setDisplayForm}) {
    const [image, setImage] = useState(undefined);

    return(
        <div className='fixed w-full h-full bg-neutral-950/60 z-10 overflow-y-auto'
            onClick={() => setDisplayForm(false)}
        >
            <div className='sticky w-9/10 h-auto my-30 mx-auto
                flex flex-col items-center
                bg-slate-900 rounded-xl p-4 pt-6'
                onClick={(e) => e.stopPropagation()}
            >
                <h1 className='text-2xl text-neutral-300 font-semibold mb-4'>Create new pin</h1>
                <div className='flex flex-col w-full items-center mb-4'>
                    <input type="text" placeholder='Enter link url here'
                        className='w-3/4 h-10 placeholder-gray-400
                        bg-slate-800 rounded-md px-2 
                        focus:outline-2 outline-slate-600
                        text-neutral-300 text-md font-semibold
                        mb-8 focus:bg-slate-700'
                    />
                    <input type="text" placeholder='Enter title here'
                        maxLength={30}
                        className='w-3/4 h-10 placeholder-gray-400
                        bg-slate-800 rounded-md px-2 
                        focus:outline-2 outline-slate-600
                        text-neutral-300 text-md font-semibold
                        mb-8 focus:bg-slate-700'
                    />
                    <textarea type="text" placeholder='Enter description here'
                        maxLength={100}
                        className='w-3/4 h-30 placeholder-gray-400
                        bg-slate-800 rounded-md px-2 py-1 resize-none
                        focus:outline-2 outline-slate-600
                        text-neutral-300 text-md font-semibold
                        mb-8 focus:bg-slate-700'
                    />
                    
                    {!image ? 
                    <div className='w-3/4 h-24'>
                        <input id="imgInput" type="file" accept="image/*" 
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                setImage(file ? URL.createObjectURL(file) : undefined);
                            }}
                            className='hidden'
                        />
                        <div className='w-full h-full bg-slate-800 rounded-md
                            flex flex-col items-center justify-center'
                        >
                            <label htmlFor="imgInput" className='flex flex-col items-center
                                text-gray-400 text-md font-semibold'
                            >
                                Select your pin cover
                                <img src="https://static.thenounproject.com/png/1077596-200.png"
                                className='rounded-md h-16'/>
                            </label>
                        </div>
                    </div>
                    :
                    <img src={image} alt="Preview image" 
                        className='w-3/4 h-24 rounded-md'
                    />
                    }
                </div>
                <button className='w-48 h-10 
                    bg-slate-800 rounded-md mt-10 mb-6
                    text-neutral-300 text-md font-semibold
                    hover:bg-slate-700 hover:cursor-pointer'
                >Pin this link</button>
                <a className='text-neutral-300 text-md font-semibold mb-2'
                onClick={() => setDisplayForm(false)}
                >Cancel</a>
            </div>
        </div>
    );
}