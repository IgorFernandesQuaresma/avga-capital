
import React, { useEffect, useState } from 'react';
import DrawerList from './DrawerList';

function NavMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        container 
        flex flex-row justify-between items-center 
        fixed top-0 left-0 w-full z-50 
        transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} 
        p-8`}
    >
      <img className="logo h-14" src="/Logo.png" alt="Logo AVGA" />
      <DrawerList />
    </div>
  );
}

export default NavMenu