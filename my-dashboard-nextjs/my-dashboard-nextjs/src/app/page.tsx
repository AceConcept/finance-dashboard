'use client';

import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { MobileHeader } from './components/MobileHeader';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile/Tablet Header */}
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className="bg-[#FCFCFD]">
          <Sidebar />
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Full-screen Sidebar */}
        <div className="fixed inset-0 bg-[#FCFCFD] z-50">
          <div className="absolute top-4 right-4">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 hover:bg-gray-100 rounded-lg border border-[#D0D5DD]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5" stroke="#1D1C20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <Sidebar />
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-white lg:pt-0 pt-[76px]">
        <Dashboard onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      </div>
    </>
  );
}
