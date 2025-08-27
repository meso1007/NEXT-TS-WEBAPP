'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/types/header';

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navigationItems }) => {
  return (
    <nav className="hidden md:flex space-x-8">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-gray-900 transition-colors font-medium relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNavigation;