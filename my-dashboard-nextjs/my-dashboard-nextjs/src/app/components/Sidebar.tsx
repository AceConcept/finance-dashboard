'use client';

import React from 'react';
import Link from 'next/link';

// Main navigation items
const mainMenuItems = [
  { 
    label: 'Dashboard', 
    href: '/', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M7.49986 8.05634V7.99994M13.1016 13.6016C11.9168 14.7864 8.44837 13.239 5.35468 10.1453C2.261 7.0516 0.713554 3.58319 1.89837 2.39837C3.08319 1.21355 6.5516 2.761 9.64528 5.85468C12.739 8.94837 14.2864 12.4168 13.1016 13.6016ZM1.89849 13.6016C0.713674 12.4168 2.26112 8.9484 5.3548 5.85472C8.44849 2.76103 11.9169 1.21359 13.1017 2.39841C14.2865 3.58322 12.7391 7.05163 9.6454 10.1453C6.55172 13.239 3.08331 14.7864 1.89849 13.6016Z" stroke="#4F4D55" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  },
  { 
    label: 'Tasks', 
    href: '/tasks', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M10.3125 10.8125V5.1875M8.20312 10.8125V5.1875M11.0156 2.375L3.98438 2.375C2.8194 2.375 1.875 3.3194 1.875 4.48437L1.875 11.5156C1.875 12.6806 2.8194 13.625 3.98437 13.625H11.0156C12.1806 13.625 13.125 12.6806 13.125 11.5156V4.48438C13.125 3.3194 12.1806 2.375 11.0156 2.375Z" stroke="#4F4D55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  },
  { 
    label: 'Calendar', 
    href: '/calendar', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M2.96875 6.07141H11.7188M4.0997 2.375V3.3394M10.4688 2.375V3.33928M12.3438 5.02678V11.9375C12.3438 12.8695 11.5976 13.625 10.6771 13.625H4.01042C3.08994 13.625 2.34375 12.8695 2.34375 11.9375V5.02678C2.34375 4.0948 3.08994 3.33928 4.01042 3.33928H10.6771C11.5976 3.33928 12.3438 4.0948 12.3438 5.02678Z" stroke="#4F4D55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  },
  { 
    label: 'Settings', 
    href: '/settings', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M1.5 3.5L7.5 3.5M1.5 8H7.5M7.5 8V9.5M7.5 8V6.5M1.5 12.5H4.5M7.5 12.5L13.5 12.5M10.5 8H13.5M10.5 3.5L13.5 3.5M10.5 3.5V5M10.5 3.5V2M4.875 14V11" stroke="#4F4D55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  },
];

// Team management items
const teamItems = [
  { 
    label: 'Payrolls', 
    href: '/payrolls', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M0.75 4.88C0.75 5.29421 1.08579 5.63 1.5 5.63C1.91421 5.63 2.25 5.29421 2.25 4.88H0.75ZM4.38 2.75C4.79421 2.75 5.13 2.41421 5.13 2C5.13 1.58579 4.79421 1.25 4.38 1.25V2.75ZM10.62 1.25C10.2058 1.25 9.87 1.58579 9.87 2C9.87 2.41421 10.2058 2.75 10.62 2.75L10.62 1.25ZM11.1 2L11.1 1.25L11.1 2ZM13.5 4.4L12.75 4.4V4.4H13.5ZM12.75 4.88C12.75 5.29421 13.0858 5.63 13.5 5.63C13.9142 5.63 14.25 5.29421 14.25 4.88H12.75ZM4.19033 12.8503C4.48322 12.5574 4.48322 12.0826 4.19033 11.7897C3.89744 11.4968 3.42256 11.4968 3.12967 11.7897L4.19033 12.8503ZM1.44967 13.4697C1.15678 13.7626 1.15678 14.2374 1.44967 14.5303C1.74256 14.8232 2.21744 14.8232 2.51033 14.5303L1.44967 13.4697ZM12.4897 14.5303C12.7826 14.8232 13.2574 14.8232 13.5503 14.5303C13.8432 14.2374 13.8432 13.7626 13.5503 13.4697L12.4897 14.5303ZM11.8703 11.7897C11.5774 11.4968 11.1026 11.4968 10.8097 11.7897C10.5168 12.0826 10.5168 12.5574 10.8097 12.8503L11.8703 11.7897ZM6.15533 7.84467C5.86244 7.55178 5.38756 7.55178 5.09467 7.84467C4.80178 8.13756 4.80178 8.61244 5.09467 8.90533L6.15533 7.84467ZM6.75 9.5L6.21967 10.0303C6.51256 10.3232 6.98744 10.3232 7.28033 10.0303L6.75 9.5ZM9.90533 7.40533C10.1982 7.11244 10.1982 6.63756 9.90533 6.34467C9.61243 6.05178 9.13756 6.05178 8.84467 6.34467L9.90533 7.40533Z" fill="#4F4D55"/>
    </svg>
  },
  { 
    label: 'Invoices', 
    href: '/invoices', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M1.5 7.99981L13.5 7.99981M9.13636 4.49663L7.5 6.19668M7.5 6.19668L5.86364 4.49663M7.5 6.19668V2M5.86364 11.5034L7.5 9.80332M7.5 9.80332L9.13636 11.5034M7.5 9.80332V14" stroke="#4F4D55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  },
  { 
    label: 'Employees', 
    href: '/employees', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M2.23438 14L6.83712 5.9452M8.48095 5.9452L12.7549 14M2.72143 9.72603C3.92642 11.5402 5.69191 12.6849 7.65918 12.6849C9.62646 12.6849 11.392 11.5402 12.5969 9.72603M7.65903 2.82192C6.75117 2.82192 6.0152 3.55789 6.0152 4.46575C6.0152 5.37362 6.75117 6.10959 7.65903 6.10959C8.5669 6.10959 9.30287 5.37362 9.30287 4.46575C9.30287 3.55789 8.5669 2.82192 7.65903 2.82192ZM7.65903 2.82192V2" stroke="#4F4D55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  },
  { 
    label: 'Hiring', 
    href: '/hiring', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M1.5 14L1.50025 11.7497C1.50039 10.5072 2.50771 9.5 3.75025 9.5H8.24991M10.125 11.375L10.875 12.125L13.5 9.5M9 4.25C9 5.49264 7.99264 6.5 6.75 6.5C5.50736 6.5 4.5 5.49264 4.5 4.25C4.5 3.00736 5.50736 2 6.75 2C7.99264 2 9 3.00736 9 4.25Z" stroke="#4F4D55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  },
];

// List items
const listItems = [
  { label: 'Salary Information', href: '/salary' },
  { label: 'Project-specific Data', href: '/project-data' },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#FCFCFD] flex flex-col p-5">
      {/* Logo */}
      <div className="p-0">
        <h1 className="font-prosto-one text-2xl mb-4">Lunastra</h1>
      </div>

      {/* Main Menu Section */}
      <div className="px-0">
        <div className="text-[10px] font-medium text-gray-500 mb-2">MAIN MENU</div>
        {mainMenuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm"
          >
            <span className="mr-3 text-base w-4 h-4">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Team Management Section */}
      <div className="px-0 mt-4">
        <div className="text-[10px] font-medium text-gray-500 mb-2">TEAM MANAGEMENT</div>
        {teamItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm"
          >
            <span className="mr-3 text-base w-4 h-4">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* List Section */}
      <div className="px-0 mt-4">
        <div className="text-[10px] font-medium text-gray-500 mb-2">LIST</div>
        {listItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm"
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Upgrade Plan Section */}
      <div className="mt-auto p-0">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm font-medium mb-2">Upgrade plan</div>
          <p className="text-xs text-gray-500 mb-3">
            Your free trial will be over in 3 days. Upgrade to premium to continue to receive benefits.
          </p>
          <button className="w-full bg-black text-white py-2 px-4 rounded-lg text-sm">
            Upgrade your Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
