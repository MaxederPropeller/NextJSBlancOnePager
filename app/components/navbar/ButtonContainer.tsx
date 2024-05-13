'use client';
import React, { useEffect, useState } from 'react';
import { MenuButton } from './MenuButton';
import { MotionDiv, MotionLi } from '@/lib/motionExport';

const MenuButtonContainer = () => {
  const [isOpen, setOpen] = useState(false);
  const menuButtonStyle = { cursor: 'pointer', border: 'none', background: 'transparent' };

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        setOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [isOpen]);

  const handleScroll = (anchorId: string) => {
    const anchorElement = document.getElementById(anchorId);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className='m-4 w-fit h-fit right-0 top-2 fixed z-50'>
        <MenuButton
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
          strokeWidth="3"
          color={isOpen ? '#FF2099' : '#C8ED6E'}
          transition={{ ease: "easeOut", duration: 0.2 }}
          width="32"
          height="12"
          style={menuButtonStyle}
        />
      </div>
      {isOpen && (
        <MotionDiv
          transition={{ ease: "easeInOut", duration: 0.2 }}
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          className='fixed top-0 left-0 bg-accent-foreground/90 w-64 h-full shadow-lg z-40'
        >
          <ul className='flex flex-col justify-center items-start pl-4 h-full text-accent'>
            {['home', 'team', 'angebot', 'galerie', 'kontakt'].map((item, index) => (
              <MotionLi
                key={item}
                whileHover={{ scale: 1.1, color: '#FF2099', transition: { duration: 0, delay: 0  }}  }
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                className='text-4xl font-bold p-4'
                onClick={() => handleScroll(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </MotionLi>
              
            ))}
          </ul>
        </MotionDiv>
      )}
    </>
  );
};

export default MenuButtonContainer;
