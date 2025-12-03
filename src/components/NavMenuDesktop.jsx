import React, { useEffect, useState } from "react";

function NavMenuDesktop() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`flex flex-col fixed top-0 left-0 w-full z-50 transition-all duration-300 p-8 font-sans items-center ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Container para o LOGO e MENU (Mantém eles na mesma linha) */}
      <div className="flex flex-row justify-between items-center w-full"> 
        {/* LOGO */}
      <div className="w-[30%]">
        <img
          className="logo h-20"
          src="/Logo.png"
          alt="Logo AVGA"
        />
        </div>

        {/* MENU */}
        <div className="w[70%]">
        <ul className="flex flex-row justify-between items-center gap-8 text-lg font-bold text-[#092d4d] border-[#092d4d] ">
          <li onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })} className="mr-4 pr-4 border-r border-[#092d4d] hover:opacity-80 transition-opacity duration-150 ease-in-out cursor-pointer">Sobre</li> 
          <li className="mr-4 pr-4 border-r border-[#092d4d] hover:opacity-80 transition-opacity duration-150 ease-in-out cursor-pointer">Real Estate</li>
          <li className="mr-4 pr-4 border-r border-[#092d4d] hover:opacity-80 transition-opacity duration-150 ease-in-out cursor-pointer">Fundos</li>
          <li className="mr-4 pr-4 border-r border-[#092d4d] hover:opacity-80 transition-opacity duration-150 ease-in-out cursor-pointer">Wealth</li>
          <li className="mr-4 transition-opacity duration-150 ease-in-out cursor-pointer">Nossa equipe</li> 
        </ul>
        </div> 
      </div>

      {/* DIVIDER - Agora ele está abaixo do div que contém LOGO e MENU */}      
      <div className="w-full h-0.5 bg-white mt-4"></div>
</div>
    
  );
}

export default NavMenuDesktop;
