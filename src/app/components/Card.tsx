import React from 'react';

interface CardProps {
  title: string;
  amount: string;
  percentage: number;
  timePeriod: string;
}

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5.5 10C5.5 10.8284 4.82843 11.5 4 11.5C3.17157 11.5 2.5 10.8284 2.5 10C2.5 9.17157 3.17157 8.5 4 8.5C4.82843 8.5 5.5 9.17157 5.5 10ZM11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10ZM17.5 10C17.5 10.8284 16.8284 11.5 16 11.5C15.1716 11.5 14.5 10.8284 14.5 10C14.5 9.17157 15.1716 8.5 16 8.5C16.8284 8.5 17.5 9.17157 17.5 10Z" fill="black" stroke="black"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path 
      d="M2.39844 16.7992L7.77444 11.63L12.3824 16.0608L21.5984 7.19922M21.5984 7.19922H14.6864M21.5984 7.19922V13.8454" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path 
      d="M2.39844 7.20078L7.77444 12.37L12.3824 7.93924L21.5984 16.8008M21.5984 16.8008H14.6864M21.5984 16.8008V10.1546" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const Card: React.FC<CardProps> = ({ title, amount, percentage, timePeriod }) => {
  const isPositive = percentage >= 0;
  return (
    <div className="flex flex-col justify-between w-full p-3 sm:p-4 rounded-xl border border-[#E4E7EC] bg-white min-h-[120px] sm:min-h-[138px]">
      <div className="flex justify-between items-center w-full mb-4 sm:mb-6">
        <span className="font-inter text-sm sm:text-base font-semibold leading-[22px] tracking-[-0.18px] text-[#000000]">
          {title}
        </span>
        <MenuIcon />
      </div>
      <div className="flex flex-col justify-end">
        <span className="text-xl sm:text-2xl font-semibold font-inter text-[#101828] mb-2">
          {amount}
        </span>
        <div className="flex items-center gap-1">
          <div className={`${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
          <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{Math.abs(percentage).toFixed(1)}%
          </span>
          <span className="text-sm text-gray-500">vs {timePeriod}</span>
        </div>
      </div>
    </div>
  );
};
