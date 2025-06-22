import { useState, useRef } from "react";
import '../style.css';

export default function AddButton({screenWidth, setDisplayForm}) {
  const [addBtnContent, setAddBtnContent] = useState("+");
  const hoverTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);
  const smScreenW = 640;
  
  const handleAddBtnHover = () => {
    clearTimeout(leaveTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setAddBtnContent('+ Add link');
    }, 150);
  }

  const handleAddBtnLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setAddBtnContent('+');
    }, 50);
  }

  return (
    <button onMouseEnter={handleAddBtnHover}
      onMouseLeave={handleAddBtnLeave}
      onClick={() => setDisplayForm(true)}
      className={`fixed 
      size-16 max-size-16 hover:w-36 max-w-36
      p-4 right-1/50 bottom-1/50
      flex items-center justify-center
      text-neutral-300 text-md lg:text-xl font-medium
      bg-slate-800 rounded-full
      hover:cursor-pointer
      transition-all duration-300 ease-in-out`}
    >
      {screenWidth <= smScreenW ? "+" : addBtnContent}
    </button>
  );
}