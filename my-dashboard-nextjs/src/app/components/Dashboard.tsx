'use client';

import React, { useState, useEffect } from 'react';
import { ButtonGroup } from './ButtonGroup';
import { CardGrid } from './CardGrid';
import Table from './Table';

type TimePeriod = '12 months' | '30 days' | '7 days' | '24 hours';

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('30 days');

  const [cardData] = useState<Record<TimePeriod, Array<{ title: string; amount: string; percentage: number }>>>({
    '12 months': [
      { title: "Revenue", amount: "$678,345.67", percentage: 12.5 },
      { title: "Subscriptions", amount: "28,345", percentage: 8.2 },
      { title: "Conversions", amount: "15,678", percentage: -3.4 },
      { title: "Visitors", amount: "1,234,567", percentage: 5.7 }
    ],
    '30 days': [
      { title: "Revenue", amount: "$45,231.89", percentage: 20.1 },
      { title: "Subscriptions", amount: "2,450", percentage: -5.4 },
      { title: "Conversions", amount: "1,234", percentage: 8.2 },
      { title: "Visitors", amount: "10,234", percentage: -2.3 }
    ],
    '7 days': [
      { title: "Revenue", amount: "$12,345.67", percentage: -1.5 },
      { title: "Subscriptions", amount: "567", percentage: 3.8 },
      { title: "Conversions", amount: "234", percentage: -2.1 },
      { title: "Visitors", amount: "2,345", percentage: 7.6 }
    ],
    '24 hours': [
      { title: "Revenue", amount: "$1,234.56", percentage: 15.3 },
      { title: "Subscriptions", amount: "45", percentage: -8.9 },
      { title: "Conversions", amount: "12", percentage: 6.7 },
      { title: "Visitors", amount: "345", percentage: 4.2 }
    ]
  });

  useEffect(() => {
    // setGraphData(generateGraphData(selectedPeriod));
  }, [selectedPeriod]);

  const handlePeriodChange = (period: TimePeriod) => {
    setSelectedPeriod(period);
  };

  const timePeriodsMap = {
    '12 months': 'Last 12 months',
    '30 days': 'Last 30 days',
    '7 days': 'Last 7 days',
    '24 hours': 'Last 24 hours'
  };

  return (
    <div className="flex-1 p-4 xl:p-8 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#344054]">Dashboard</h1>
        </div>
        <div className="mb-8">
          <ButtonGroup selectedPeriod={selectedPeriod} onPeriodChange={handlePeriodChange} />
        </div>
        <div className="mb-8">
          <CardGrid
            selectedPeriod={selectedPeriod}
            cardData={cardData}
            timePeriodsMap={timePeriodsMap}
          />
        </div>
        <div className="mb-8">
          <Table />
        </div>
      </div>
    </div>
  );
}
