'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ButtonGroup } from './ButtonGroup';
import { Card } from './Card';
import Table from './Table';
import { Graph } from '../components/Graph';
import { Header } from './Header';
import { CardGrid } from './CardGrid';

type TimePeriod = '12 months' | '30 days' | '7 days' | '24 hours';

interface DashboardProps {
  onMenuClick: () => void;
}

export default function Dashboard({ onMenuClick }: DashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('30 days');
  const [graphType, setGraphType] = useState<'bar' | 'line'>('bar');

  const timePeriodsMap = {
    '12 months': 'Last year',
    '30 days': 'Last month',
    '7 days': 'Last week',
    '24 hours': 'Yesterday'
  };

  const cardData = {
    '12 months': [
      { title: "Balance", amount: "$300,225.23", percentage: 2.5 },
      { title: "Income", amount: "$20,200", percentage: -1.25 },
      { title: "Expenses", amount: "$225.23", percentage: 2.15 }
    ],
    '30 days': [
      { title: "Balance", amount: "$300,225.23", percentage: 2.5 },
      { title: "Income", amount: "$20,200", percentage: -1.25 },
      { title: "Expenses", amount: "$225.23", percentage: 2.15 }
    ],
    '7 days': [
      { title: "Balance", amount: "$300,225.23", percentage: 2.5 },
      { title: "Income", amount: "$20,200", percentage: -1.25 },
      { title: "Expenses", amount: "$225.23", percentage: 2.15 }
    ],
    '24 hours': [
      { title: "Balance", amount: "$300,225.23", percentage: 2.5 },
      { title: "Income", amount: "$20,200", percentage: -1.25 },
      { title: "Expenses", amount: "$225.23", percentage: 2.15 }
    ]
  };

  const graphData = [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 1900 },
    { name: 'Mar', value: 1600 },
    { name: 'Apr', value: 2400 },
    { name: 'May', value: 2200 },
    { name: 'Jun', value: 2900 },
    { name: 'Jul', value: 3100 },
    { name: 'Aug', value: 2800 },
    { name: 'Sep', value: 3400 },
    { name: 'Oct', value: 3200 },
    { name: 'Nov', value: 3700 },
    { name: 'Dec', value: 4000 }
  ];

  return (
    <div className="min-h-screen">
      <Header onMenuClick={onMenuClick} />
      
      {/* Notification Banner - Hidden on mobile */}
      <div className="px-6">
        <div className="hidden sm:flex bg-[#E1FAEA] h-9 rounded-[40px] items-center px-3 mb-6">
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4969 1.80078C14.988 1.80078 16.1969 3.00961 16.1969 4.50078L16.1969 13.5009C16.1969 14.992 14.988 16.2009 13.4969 16.2009H4.49688C3.00571 16.2009 1.79688 14.992 1.79688 13.5009V4.50078C1.79688 3.00961 3.00571 1.80078 4.49687 1.80078H13.4969ZM8.99717 4.50085C9.49422 4.50085 9.89717 4.9038 9.89717 5.40085C9.89717 5.89791 9.49422 6.30085 8.99717 6.30085C8.50011 6.30085 8.09717 5.89791 8.09717 5.40085C8.09717 4.9038 8.50011 4.50085 8.99717 4.50085ZM8.99717 7.65085C9.49422 7.65085 9.89717 8.0538 9.89717 8.55085V12.1509C9.89717 12.6479 9.49422 13.0509 8.99717 13.0509C8.50011 13.0509 8.09717 12.6479 8.09717 12.1509V8.55085C8.09717 8.0538 8.50011 7.65085 8.99717 7.65085Z" fill="#3BBA6A"/>
          </svg>
          <span className="text-xs flex-1">
            <span className="lg:hidden">Only 2 days left to wrap up payroll! Double-check and finalize...</span>
            <span className="hidden lg:inline">Only 2 days left to wrap up payroll! Double-check and finalize all employee details to keep things running smoothly.</span>
          </span>
          <button className="text-xs text-[#016626] underline font-semibold">MORE DETAILS</button>
          <button className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.45451 4.4545C4.89385 4.01517 5.60616 4.01517 6.0455 4.4545L9 7.40901L11.9545 4.45451C12.3938 4.01517 13.1062 4.01517 13.5455 4.45451C13.9848 4.89385 13.9848 5.60616 13.5455 6.0455L10.591 9L13.5455 11.9545C13.9848 12.3938 13.9848 13.1062 13.5455 13.5455C13.1062 13.9848 12.3938 13.9848 11.9545 13.5455L9 10.591L6.0455 13.5455C5.60616 13.9848 4.89384 13.9848 4.4545 13.5455C4.01516 13.1062 4.01517 12.3938 4.45451 11.9545L7.40901 9L4.45451 6.0455C4.01517 5.60616 4.01517 4.89384 4.45451 4.4545Z" fill="#016626"/>
            </svg>
          </button>
        </div>
        
        {/* Time Period Selection */}
        <div className="mb-4 sm:mb-6">
          <ButtonGroup selectedPeriod={selectedPeriod} onPeriodChange={setSelectedPeriod} />
        </div>

        {/* Use CardGrid instead of mapping cards directly */}
        <div className="mb-8">
          <CardGrid 
            selectedPeriod={selectedPeriod}
            cardData={cardData}
            timePeriodsMap={timePeriodsMap}
          />
        </div>

        {/* Graph Component */}
        <div className="mb-8">
          <Graph 
            data={graphData}
            type={graphType}
            onTypeChange={setGraphType}
          />
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <Table />
        </div>
      </div>
    </div>
  );
}
