import type { Metadata } from "next";
import { Dancing_Script as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import "./globals.css";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer/footer";


const fontSans = FontSans({
  weight: ['400', '500'  , '700'],
  variable: "--latin",
  subsets: ["latin"],
})



export const metadata: Metadata = {
  title: "Lebendige Gärten",
  description: "Lebendige Gärten",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased min-w-screen",
          fontSans.variable
        )}>
          
          <Sidebar />
          {children}
          <Footer />
          </body>
    </html>
  );
}
