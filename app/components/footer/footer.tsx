'use client';
import React from 'react';
import { MotionDiv, MotionLi } from '@/lib/motionExport';
import Link from 'next/link';
import Butterfly from '@/public/butterfly.svg';
import Image from 'next/image';

const Footer = () => {
const handleScroll = (anchorId: string): void => {
    const anchorElement: HTMLElement | null = document.getElementById(anchorId);
    if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
};

  return (
    <footer className="bg-accent mt-12 py-8 md:min-h-48">
      <div className="container mx-auto">
        <div className='w-full h-full my-8'>
          <h1 className="text-5xl text-center text-accent-foreground ">Lebendige Gärten</h1>
          <div className='relative my-2'>
            <div className="bg-accent-foreground w-full h-[2px] mx-auto" />
            <Image src={Butterfly} alt="Butterfly" className="w-12 h-12 mx-auto absolute -right-4 -top-6 -rotate-12" />
          </div>
          <h2 className="text-xl text-center text-accent-foreground QR">Christine Räz</h2>
        </div>

        <MotionDiv
          className="flex justify-center flex-col md:flex-row items-center gap-4"
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          exit={{ y: 300 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          {['home', 'team', 'angebot', 'galerie', 'kontakt'].map((item, index) => (
            <MotionLi
              key={item}
              whileHover={{ scale: 1.1, 

               }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, delay: index * 0.1 } }}
              
              className="text-accent-foreground hover:text-accent-foreground px-4 cursor-pointer transition-all duration-300 ease-in-out 
              list-none text-3xl  font-bold  

              "
              onClick={() => handleScroll(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </MotionLi>
          ))}
        </MotionDiv>
       
              <div className='w-full flex flex-col justify-center items-center text-center my-8 relative '>
              <div className="bg-accent-foreground w-full h-[2px] mx-auto mt-4 absolute z-50 -top-6" />
            <Link href="/impressum" passHref className="text-accent-foreground hover:text-accent-foreground text-lg tracking-wider w-full ">Impressum
            </Link>
          </div>

        
      </div>
    </footer>
  );
};

export default Footer;
