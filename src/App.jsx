import { useState, useEffect } from 'react'
import './App.css'
import NavMenu from './components/NavMenu';
import NavMenuDesktop from './components/NavMenuDesktop';
import Home from './components/Home';
import Sobre from './components/Sobre';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <NavMenu /> : <NavMenuDesktop />}
      <Home />
      <Sobre/>
    </>
  )
}

export default App
