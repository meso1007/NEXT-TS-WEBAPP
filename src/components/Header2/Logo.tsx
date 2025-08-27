'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center group pt-10">
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-transform group-hover:scale-105" 
        style={{ backgroundColor: '#AFE995' }}
      >
        <Heart className="w-6 h-6 text-white" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
          みらいメッセージ協会
        </h1>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
          Future Message Association
        </p>
      </div>
    </Link>
  );
};

export default Logo;
