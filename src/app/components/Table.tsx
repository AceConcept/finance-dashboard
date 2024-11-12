'use client';

import React, { useState, useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa';

// Move the helper functions outside the component
const generateRandomDate = (start: Date, end: Date) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit' });
};

const getRandomCategory = () => {
  const categories = [
    { 
      name: 'Subscription', 
      color: 'border border-[#B2DDFF] bg-[#EFF8FF] text-blue-800',
      dotColor: '#1570EF'
    },
    { 
      name: 'Food & Drinks', 
      color: 'border border-[#ABEFC6] bg-[#ECFDF3] text-green-800',
      dotColor: '#12B76A'
    },
    { 
      name: 'Income', 
      color: 'border border-[#FCCEEE] bg-[#FDF2FA] text-pink-800',
      dotColor: '#EE46BC'
    }
  ];
  return categories[Math.floor(Math.random() * categories.length)];
};

// Add these icon components at the top of your file, after the imports
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5" 
      stroke="#344054" 
      strokeWidth="1.67" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M14.9998 2.5L17.4998 5M2.5 17.5L2.83592 15.4227C2.91693 14.8029 3.20608 14.2318 3.65847 13.7917L13.3336 4.16667L15.8336 6.66667L6.15847 16.2917C5.71817 16.7264 5.1433 17.0073 4.51772 17.0773L2.5 17.5Z" 
      stroke="#667085" 
      strokeWidth="1.67" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function Table() {
  // Use state to store the table data
  const [tableData, setTableData] = useState<any[]>([]);

  // Generate data only once when component mounts on client side
  useEffect(() => {
    const generateTableData = () => {
      return Array.from({ length: 7 }, (_, i) => ({
        id: i + 1,
        transaction: ['Payment', 'Refund', 'Purchase', 'Salary', 'Subscription', 'Dining', 'Transfer'][i % 7],
        amount: Math.random() > 0.5 ? `+$${(Math.random() * 1000).toFixed(2)}` : `-$${(Math.random() * 500).toFixed(2)}`,
        date: generateRandomDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), new Date()),
        category: getRandomCategory()
      })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    };

    setTableData(generateTableData());
  }, []);

  // Show loading state or empty table while data is being generated
  if (tableData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-hidden bg-white rounded-lg border border-[#E4E7EC]">
      <div className="p-4 sm:p-6 border-b border-[#E4E7EC]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg sm:text-xl font-semibold text-[#344054]">Recent Activity</h2>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg border border-[#D0D5DD] bg-white text-sm font-semibold text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <DownloadIcon />
              Download
            </button>
            <button className="inline-flex items-center justify-center px-[14px] py-[10px] rounded-lg border border-[#D0D5DD] bg-white text-sm font-semibold text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              View Report
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="min-w-[600px] sm:min-w-0">
          <table className="w-full">
            <thead className="bg-white sticky top-0 z-10">
              <tr>
                <th className="py-3 px-6 border-b text-left text-xs font-medium font-inter text-[#475467] w-[40%]">
                  Transaction
                </th>
                <th className="py-3 px-6 border-b text-left text-xs font-medium font-inter text-[#475467] w-[15%]">
                  Amount
                </th>
                <th className="py-3 px-6 border-b text-left text-xs font-medium font-inter text-[#475467] w-[20%]">
                  Date
                </th>
                <th className="py-3 px-6 border-b text-left text-xs font-medium font-inter text-[#475467] w-[20%]">
                  Category
                </th>
                <th className="py-3 px-6 border-b text-xs font-medium font-inter text-[#475467] w-[5%]">
                  {/* Actions */}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id} className="group hover:bg-gray-50">
                  <td className="py-4 px-6 border-b">
                    <div className="flex items-center gap-3 min-w-[200px]">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/[0.08] flex-shrink-0">
                        <FaDollarSign className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="text-[14px] font-medium font-inter text-[#101828] leading-5 truncate">
                        {item.transaction}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 border-b text-[14px] font-normal font-inter text-[#475467] leading-5 whitespace-nowrap">
                    {item.amount}
                  </td>
                  <td className="py-4 px-6 border-b text-[14px] font-normal font-inter text-[#475467] leading-5 whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="py-4 px-6 border-b">
                    <div className="min-w-[120px]">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 pl-1.5 rounded-2xl text-xs font-medium ${item.category.color}`}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="8" 
                          height="8" 
                          viewBox="0 0 8 8" 
                          fill="none"
                          className="w-2 h-2 flex-shrink-0"
                        >
                          <circle cx="4" cy="4" r="3" fill={item.category.dotColor} />
                        </svg>
                        {item.category.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 border-b text-center">
                    <button className="hover:opacity-80">
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
