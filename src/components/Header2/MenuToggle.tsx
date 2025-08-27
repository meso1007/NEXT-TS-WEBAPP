'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
      aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

export default MenuToggle;
