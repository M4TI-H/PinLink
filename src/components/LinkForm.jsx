import { useState } from 'react';
import '../style.css';
import { BiX } from 'react-icons/bi';

export default function LinkForm({setDisplayForm, screenHeight}) {
    const [image, setImage] = useState(undefined);
    const smScreenH = 600;
    
    return(
        <div className='fixed w-full h-full bg-neutral-950/60 z-10 overflow-y-auto'
            onClick={() => setDisplayForm(false)}
        >
            <div className='fixed w-128 max-w-1/2 h-full
                right-1 flex flex-col items-center
                bg-slate-900 p-4'
                onClick={(e) => e.stopPropagation()}
            >
                <button className='absolute top-5 right-5
                    size-6 text-2xl text-neutral-300
                    hover:cursor-pointer'
                    onClick={() => setDisplayForm(false)}
                >{<BiX />}</button>
                <h1 className='text-lg text-neutral-300 font-semibold mb-8'>Create new pin</h1>
                <div className='flex flex-col w-full h-3/4 items-center mb-4'>
                    <div className='w-3/4'>
                        {screenHeight >= smScreenH && <label className='text-neutral-300 text-md ml-1 mb-1'>Title</label>}
                        <input type="text" placeholder={screenHeight < smScreenH ? "Enter title here" : ""}
                            maxLength={30}
                            className='w-full h-1/12 min-h-10
                            bg-slate-800 rounded-md px-2 
                            focus:outline-2 outline-slate-600
                            text-neutral-300 text-md font-semibold
                            mb-8 focus:bg-slate-700 placeholder-gray-400'
                        />
                    </div>
                    <div className='w-3/4'>
                        {screenHeight >= smScreenH && <label className='text-neutral-300 text-md ml-1 mb-1'>Description</label>}
                        <textarea type="text" placeholder={screenHeight < smScreenH ? "Enter description here" : ""}
                            maxLength={100}
                            className='w-full h-1/4 min-h-30
                            bg-slate-800 rounded-md px-2 py-1 resize-none
                            focus:outline-2 outline-slate-600
                            text-neutral-300 text-md font-semibold
                            mb-8 focus:bg-slate-700 placeholder-gray-400'
                        />
                    </div>
                    <div className='w-3/4'>
                        {screenHeight >= smScreenH && <label className='text-neutral-300 text-md ml-1 mb-1'>Your pin cover</label>}
                        {!image ? 
                        <div className='w-full min-h-16'>
                            <input id="imgInput" type="file" accept="image/*" 
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    setImage(file ? URL.createObjectURL(file) : undefined);
                                }}
                                className='hidden'
                            />
                            <div className='w-full min-h-20 max-h-36 bg-slate-800 rounded-md
                                flex items-center justify-center'
                            >
                                <label htmlFor="imgInput" className='flex flex-col items-center
                                    text-gray-400 text-md font-semibold'
                                >
                                    {screenHeight < smScreenH && "Select your pin cover"}
                                    <img src="https://static.thenounproject.com/png/1077596-200.png"
                                    className='rounded-md max-h-16'/>
                                </label>
                            </div>
                        </div>
                        :
                        <>
                            <img src={image} alt="Preview image" 
                                className='w-full min-h-16 max-h-1/3 rounded-md'
                            />
                            <a onClick={() => setImage(undefined)}
                                className='mr-2 mt-1 self-end
                                text-slate-600 text-sm font-semibold
                                hover:curor-pointer hover:underline'
                            >Delete</a>
                        </>
                        }
                    </div>
                </div>
                <button className='w-48 min-h-10
                    bg-slate-800 rounded-md mt-auto mb-4
                    text-neutral-300 text-md font-semibold
                    hover:bg-slate-700 hover:cursor-pointer'
                >Pin this link</button>
            </div>
        </div>
    );
}