import { useState, useRef, useEffect } from 'react'
import './style.css';
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const smScreen = 640;
  const mdScreen = 768;
  const lgScreen = 1024;
  const linksData = [
  { id: "1", title: "Best JavaScript Resources", description: "A curated list of tutorials and tools to master JavaScript.", date: "2025-06-01", image: "https://source.unsplash.com/random/400x300?code", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  { id: "2", title: "Daily UI Inspiration", description: "Stay updated with the latest UI/UX design trends.", date: "2025-05-25", image: "https://source.unsplash.com/random/400x300?design", url: "https://dribbble.com/ "},
  { id: "3", title: "Next.js Docs", description: "Everything you need to build modern web apps with Next.js.", date: "2025-05-28", image: "https://source.unsplash.com/random/400x300?nextjs", url: "https://nextjs.org/docs "},
  { id: "4", title: "Frontend Mentor Challenges", description: "Practice real-world front-end challenges and improve your skills.", date: "2025-06-03", image: "https://source.unsplash.com/random/400x300?frontend", url: "https://www.frontendmentor.io/ "},
  { id: "5", title: "Free Coding Courses", description: "Access hundreds of free coding courses and certifications.", date: "2025-06-05", image: "https://source.unsplash.com/random/400x300?learning", url: "https://www.freecodecamp.org/ "},
  { id: "6", title: "CSS Tricks", description: "Tips and techniques for writing better CSS.", date: "2025-06-06", image: "https://source.unsplash.com/random/400x300?css", url: "https://css-tricks.com/ "},
  { id: "7", title: "YouTube Dev Playlist", description: "Must-watch web development videos and tutorials.", date: "2025-06-02", image: "https://source.unsplash.com/random/400x300?youtube", url: "https://www.youtube.com/@Fireship "},
  { id: "8", title: "My Personal Portfolio", description: "An example of a clean and minimal developer portfolio.", date: "2025-05-20", image: "https://source.unsplash.com/random/400x300?portfolio", url: "https://example.com/portfolio "}
  ];
  const [addBtnContent, setAddBtnContent] = useState("+");
  const hoverTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className='w-screen h-screen bg-slate-900 overflow-x-hidden'>
      <Navbar screenWidth={screenWidth}/>
      <div className='flex flex-wrap gap-4 md:gap-8 justify-center
        w-full max-w-[116rem] md:px-20 mt-4 md:mt-8'
      >
      {linksData.map(() => (
        <Card key={linksData.id} screenWidth={screenWidth} linksData={linksData}/>
      ))}
      </div>

      <button onMouseEnter={handleAddBtnHover}
        onMouseLeave={handleAddBtnLeave}
        className={`absolute 
        size-16 max-size-16 md:size-12 hover:w-36 max-w-36
        p-4
        right-1/50 bottom-1/20
        flex items-center justify-center
        text-neutral-300 text-md font-medium
        bg-slate-800 rounded-full
        hover:cursor-pointer
        transition-all duration-300 ease-in-out`}
      >
        {screenWidth <= smScreen ? "+" : addBtnContent}
      </button>
    </div>
  )
}