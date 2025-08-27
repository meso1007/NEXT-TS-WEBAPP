'use client';

import React from 'react';
import Link from 'next/link';

const CTAButton: React.FC = () => {
  return (
    <div className="hidden md:block">
      <Link
        href="#otodoke"
        className="px-6 py-2 rounded-full text-white font-semibold shadow-md bg-orange-500 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
      >
        始める
      </Link>
    </div>
  );
};

export default CTAButton;
