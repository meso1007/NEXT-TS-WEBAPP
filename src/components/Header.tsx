'use client';

import React from 'react';
import { HeaderProps } from '@/types/header';
import Logo from './Header/Logo';

import Header from './Header/Header';




const HeaderSection: React.FC<HeaderProps> = ({ className = '' }) => {

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

export default HeaderSection;