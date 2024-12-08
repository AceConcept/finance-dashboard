import React from 'react';

interface CardProps {
  title: string;
  amount: string;
  percentage: number;
  timePeriod: string;
}

export const Card: React.FC<CardProps> = ({ title, amount, percentage, timePeriod }) => {
  const isPositive = percentage > 0;

  return (
    <div className="w-full p-4 bg-[#F2F4F7] rounded-xl">
      <h3 className="text-xs text-[#344054] mb-1">{title}</h3>
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold">{amount}</span>
        <div className="flex items-center gap-1">
          <span className={`text-xs ${isPositive ? 'text-[#12B76A]' : 'text-[#F04438]'}`}>
            {isPositive ? '+' : ''}{percentage}%
          </span>
          <span className="text-xs text-[#667085]">{timePeriod}</span>
        </div>
      </div>
    </div>
  );
};
