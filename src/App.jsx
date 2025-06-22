import { useState, useEffect } from 'react'
import './style.css';
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';
import LinkForm from './components/LinkForm.jsx';
import LinkFormCompact from './components/LinkFormCompact.jsx';
import AddButton from './components/AddButton.jsx';
import usePins from './components/hooks/usePins.js';

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [displayForm, setDisplayForm] = useState(false);

  const mdScreenW = 768;
  const smScreenH = 600;

  const linksData = [
  { id: "1", title: "Best JavaScript Resources", description: "A curated list of tutorials and tools to master JavaScript.", date: "2025-06-01", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  { id: "2", title: "Daily UI Inspiration", description: "Stay updated with the latest UI/UX design trends.", date: "2025-05-25", image: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "https://dribbble.com/ "},
  { id: "3", title: "Next.js Docs", description: "Everything you need to build modern web apps with Next.js.", date: "2025-05-28", image: "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg", url: "https://nextjs.org/docs "},
  { id: "4", title: "Frontend Mentor Challenges for PROS", description: "Practice real-world front-end challenges and improve your skills.", date: "2025-06-03", image: "https://miro.medium.com/v2/resize:fit:1192/1*jXusXvCfxECPU_Jh9S_E3w.jpeg", url: "https://www.frontendmentor.io/ "},
  { id: "5", title: "Free Coding Courses", description: "Access hundreds of free coding courses and certifications.", date: "2025-06-05", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EFsGJ-WiKHKNbYHM1ARzrAxJVh4KtlwKZA&s", url: "https://www.freecodecamp.org/ "},
  { id: "6", title: "CSS Tricks", description: "Tips and techniques for writing better CSS.", date: "2025-06-06", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH-oIAvcVSDEN54K4XFbmUAynW9xva-dQ0g&s", url: "https://css-tricks.com/ "},
  { id: "7", title: "YouTube Dev Playlist", description: "Must-watch web development videos and tutorials.", date: "2025-06-02", image: "https://www.youtube.com/img/desktop/yt_1200.png", url: "https://www.youtube.com/@Fireship "},
  { id: "8", title: "My Personal Portfolio", description: "An example of a clean and minimal developer portfolio.", date: "2025-05-20", image: "https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg", url: "https://example.com/portfolio "}
  ];
  const {displayedPins, setPins, createNewPin} = usePins(linksData);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='fixed w-screen h-screen bg-slate-900 overflow-x-hidden 
    flex flex-col items-center pb-10'>
      <Navbar data={linksData} setDisplayedPins={setPins} displayedPins={displayedPins}/>
      <div className='flex flex-wrap gap-6 md:gap-8 justify-center
        max-w-[100rem] md:px-20 mt-4 md:mt-8'
      >
        {displayedPins.map((link) => (
          <Card key={link.id} screenWidth={screenWidth} data={link} setPins={setPins}/>
        ))}
      </div>

      {displayForm && screenWidth >= mdScreenW && screenHeight >= smScreenH &&
        <LinkForm setDisplayForm={setDisplayForm} setDisplayedPins={createNewPin} screenHeight={screenHeight}/>
      }
      {displayForm && (screenWidth < mdScreenW || screenHeight < smScreenH) &&
        <LinkFormCompact setDisplayForm={setDisplayForm} setDisplayedPins={createNewPin}/>
      }

      <AddButton screenWidth={screenWidth} setDisplayForm={setDisplayForm}/>
    </div>
  )
}