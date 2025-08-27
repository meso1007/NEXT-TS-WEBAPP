'use client';

import React from 'react';
import { HeaderProps } from '@/types/header';
import  { useHeader} from '../hooks/useHeader';
import Logo from './Header2/Logo';

import Header from './Header/Header';




const Header2: React.FC<HeaderProps> = ({ className = '' }) => {
  const { isMenuOpen, toggleMenu, closeMenu, navigationItems } = useHeader();

  return (
    <header className={`bg-transparent sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <Header title=''/>
        </div>
      </div>
    </header>
  );
};

export default Header2;