'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center group">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-105"
      >
        <Image src="/logo.png" width={2000} height={2000} alt="logo" />

      </div>
      <div className=''>
        <h1 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
          みらいメッセージ協会
        </h1>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
          Mirai Message Association
        </p>
      </div>
    </Link>
  );
};

export default Logo;
