import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeLayout({ children }) {
  return (
    <div className="container mx-auto px-4">
      <header className="py-6">
        <h1 className="text-3xl font-bold">TransferWiki.cc</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}