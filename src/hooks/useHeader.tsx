'use client';

import { useState } from 'react';
import { NavigationItem } from '@/types/header';

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const navigationItems: NavigationItem[] = [
    { href: '#about', label: '協会について' },
    { href: '#services', label: 'サービス' },
    { href: '#otodoke', label: 'OTODOKE LIFE' },
    { href: '#contact', label: 'お問い合わせ' },
  ];

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    navigationItems,
  };
};