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

// Define an interface for your table data
interface TableRow {
  id: number;
  transactionId: string;
  transaction: string;
  date: string;
  amount: string;
  time: string;
  type: string;
  category: {
    name: string;
    color: string;
    dotColor: string;
  };
  status: 'In Progress' | 'Completed' | 'Failed';
}

export default function Table() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tableData, setTableData] = useState<any[]>([]);

  // Generate data only once when component mounts on client side
  useEffect(() => {
    const generateRandomTransactionId = () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      let result = '#';

      for (let i = 0; i < 4; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      for (let i = 0; i < 2; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      for (let i = 0; i < 6; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }

      return result;
    };

    const generateTableData = () => {
      return Array.from({ length: 7 }, (_, i) => ({
        id: i + 1,
        transactionId: generateRandomTransactionId(),
        transaction: ['Payment', 'Refund', 'Purchase', 'Salary', 'Subscription', 'Dining', 'Transfer'][i % 7],
        date: generateRandomDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), new Date()),
        amount: Math.random() > 0.5 ? `+$${(Math.random() * 1000).toFixed(2)}` : `-$${(Math.random() * 500).toFixed(2)}`,
        time: generateRandomDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), new Date()),
        type: ['Payment', 'Refund', 'Purchase', 'Salary', 'Subscription', 'Dining', 'Transfer'][i % 7],
        category: getRandomCategory(),
        status: ['In Progress', 'Completed', 'Failed'][i % 3]
      })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    };

    setTableData(generateTableData());
  }, []);

  // Show loading state or empty table while data is being generated
  if (tableData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mb-6">
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
      
      <div className="overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <div>
            <div>
              <table className="table-fixed w-[1136px]">
                <thead className="bg-[#F8F8F8]">
                  <tr>
                    <th className="text-left w-[24px] px-6 py-4">
                      <input type="checkbox" className="rounded border-gray-300 focus:outline-none focus:ring-0" />
                    </th>
                    <th className="text-left text-xs font-medium text-[#7F7D83] w-[125px] px-4 py-4">
                      Transaction ID
                    </th>
                    <th className="text-left text-xs font-medium text-[#7F7D83] w-[125px] px-4 py-4">
                      Transaction
                    </th>
                    <th className="text-left text-xs font-medium text-[#7F7D83] w-[104px] px-4 py-4">
                      Date
                    </th>
                    <th className="text-left text-xs font-medium text-[#7F7D83] w-[104px] px-4 py-4">
                      Amount
                    </th>
                    <th className="text-left text-xs font-medium text-[#7F7D83] w-[104px] px-4 py-4">
                      Time
                    </th>
                    <th className="text-left text-xs font-medium text-[#7F7D83] w-[104px] px-4 py-4">
                      Category
                    </th>
                    <th className="text-left text-xs font-medium text-[#7F7D83] w-[150px] px-6 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr key={item.id} className="group hover:bg-gray-50 h-[76px]">
                      <td className="px-6 text-sm">
                        <div className="w-[24px]">
                          <input type="checkbox" className="rounded border-gray-300" />
                        </div>
                      </td>
                      <td className="px-4 text-sm">
                        <div className="w-[125px]">{item.id}</div>
                      </td>
                      <td className="px-4 text-sm">
                        <div className="w-[125px]">{item.transaction}</div>
                      </td>
                      <td className="px-4 text-sm">
                        <div className="w-[104px]">{item.date}</div>
                      </td>
                      <td className="px-4 text-sm">
                        <div className="w-[104px]">{item.amount}</div>
                      </td>
                      <td className="px-4 text-sm">
                        <div className="w-[104px]">{item.time}</div>
                      </td>
                      <td className="px-4 text-sm">
                        <div className="w-[104px]">{item.category.name}</div>
                      </td>
                      <td className="px-6 text-sm">
                        <div className="w-[150px]">
                          <div className="flex items-center h-[28px] px-3 gap-1.5 rounded-md border border-[#018030] w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <circle cx="4" cy="4" r="3" fill="#018030"/>
                            </svg>
                            <span className="text-sm text-[#018030]">{item.status}</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
