import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeLayout({ children }) {
  return (
    <div>
      <h1>TransferWiki.cc</h1>
      {children}
    </div>
  );
}