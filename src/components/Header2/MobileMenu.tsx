'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/types/header';

interface MobileMenuProps {
  navigationItems: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navigationItems, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-200">
      <nav className="flex flex-col space-y-2">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 py-3 px-2 rounded-md transition-colors font-medium"
          >
            {item.label}
          </Link>
        ))}
        <div className="pt-2">
          <Link
            href="#otodoke"
            onClick={onClose}
            className="block text-center px-6 py-3 rounded-full text-white font-semibold shadow-md transition-all"
            style={{ backgroundColor: '#AFE995' }}
          >
            始める
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
