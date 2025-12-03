import React, { useEffect, useState } from "react";
import backgroundImage from '../assets/PrediosHome.png';
import { CgChevronDown } from "react-icons/cg";

function Home() {
  


  return (

   <div 
      className="w-full h-screen bg-black bg-cover relative flex justify-end items-center"
      style={{ backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center 1%'
    }}
    >

    <div className="w-[40%]">
    <div className="text-white font-montserrat font-semibold">
        
        <h1 className="mb-8 text-4xl">
            Conectanto o interior <br /> <span>ao mercado de capitais</span>
            </h1>

            <h1 className="mb-8 text-4xl">
            Unimos bons projetos <br /> <span>e bons investidores</span>
            </h1>

        <button className="bg-[#092d4d] w-2xs h-12 text-white text-lg rounded-2xl flex items-center gap-2 px-4 py-2 hover:opacity-80 transition-opacity duration-150 ease-in-out cursor-pointer">
            Conheça nossos fundos
            <CgChevronDown />
        </button>

    </div>
</div>
</div>


    
  );
}

export default Home;
