"use client";
import React, { useState, FC } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';

interface LogoComponentProps {
  className?: string;
  size?: number;
}

const LogoComponent: FC<LogoComponentProps> = ({ className = "", size = 120 }) => (
  <div className={`flex items-center ${className}`}>
    <Image src="/logo_future.png" alt='logo' width={size} height={size}/>
    <h2>未来メッセージ協会</h2>
    <p className='mx-2'>-</p>
    <h3> Association for Future Messages</h3>
  </div>
);

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header: FC<HeaderProps> = ({ scrollToSection }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <LogoComponent size={80} />
          </button>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('section-about')} className="text-slate-300 cursor-pointer hover:text-white transition-colors duration-300">ABOUT</button>
            <button onClick={() => scrollToSection('section-service')} className="text-slate-300 cursor-pointer hover:text-white transition-colors duration-300">SERVICES</button>
            <button onClick={() => scrollToSection('section-news')} className="text-slate-300 cursor-pointer hover:text-white transition-colors duration-300">UPDATES</button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

