
'use client';

import MenuButtonContainer from "./navbar/ButtonContainer";


export default function Sidebar() {

  const handleScroll = (anchorId: string): void => {
    const anchorElement: HTMLElement | null = document.getElementById(anchorId);
    if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (

    < >
        <MenuButtonContainer />
 
  

          

 
      
</>
  );
}