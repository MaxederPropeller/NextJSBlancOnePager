


import SectionAbout from "./components/about/AboutSection";

import SectionGalerie from "./components/galerie/GalerieSection";
import SectionHero from "./components/hero/HeroSection";
import SectionKontakt from "./components/contact/KontaktSection";
import SectionAngebotTwo from "./components/angebot/AngebotSectionTwo";
import { Suspense } from "react";
import LoadingSpinner from "./loading";


export default function Home() {
  return (
    <main className="flex flex-col gap-24 overflow-x-hidden justify-center items-center">

       <SectionHero />
     <div className="max-w-7xl flex flex-col gap-24">
        <SectionAbout />
      
        <SectionAngebotTwo />
        <Suspense fallback={<LoadingSpinner />}>
          <SectionGalerie />
        </Suspense>
        <SectionKontakt />
      
     </div>


    </main>
  );
}
