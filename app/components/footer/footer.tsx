'use client';
import React from 'react';


const Footer = () => {
const handleScroll = (anchorId: string): void => {
    const anchorElement: HTMLElement | null = document.getElementById(anchorId);
    if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
};

  return (
    <footer className="bg-primary ">
      
    </footer>
  );
};

export default Footer;
