import React from 'react';

type TimePeriod = '12 months' | '30 days' | '7 days' | '24 hours';

interface ButtonGroupProps {
  selectedPeriod: TimePeriod;
  onPeriodChange: (period: TimePeriod) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ selectedPeriod, onPeriodChange }) => {
  const periods: TimePeriod[] = ['12 months', '30 days', '7 days', '24 hours'];

  return (
    <div className="flex flex-col sm:flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      {/* Action Buttons - Hidden on mobile, above time periods for tablet */}
      <div className="hidden sm:flex order-2 sm:order-1 lg:order-2 flex-col sm:w-full lg:w-auto lg:flex-row gap-3">
        {/* Export button first */}
        <button className="w-full lg:w-auto order-1 px-[14px] py-[10px] text-[14px] border border-[#D0D5DD] rounded-lg bg-black text-white flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
            <path d="M2.5 10.0027V12.3078C2.5 12.6572 2.6317 12.9922 2.86612 13.2392C3.10054 13.4862 3.41848 13.625 3.75 13.625H11.25C11.5815 13.625 11.8995 13.4862 12.1339 13.2392C12.3683 12.9922 12.5 12.6572 12.5 12.3078V10.0027M7.50046 9.83906L7.50046 2.375M7.50046 2.375L4.64332 5.22699M7.50046 2.375L10.3576 5.22699" stroke="#FDFDFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Export
        </button>
        {/* Select dates button second */}
        <button className="w-full lg:w-auto order-2 px-[14px] py-[10px] text-[14px] border border-[#D0D5DD] rounded-lg bg-white text-[#344054] flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6.66667 5.83333L7.5 2.5M12.5 5.83333L13.3333 2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667H4.16667C3.24619 4.16667 2.5 4.91286 2.5 5.83333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Select dates
        </button>
      </div>

      {/* Time Period Buttons */}
      <div className="order-1 sm:order-2 lg:order-1 flex rounded-lg bg-[#F7F7F7]">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => onPeriodChange(period)}
            className={`px-3.5 py-2 text-sm whitespace-nowrap font-inter ${
              selectedPeriod === period
                ? 'bg-white text-[#344054] font-semibold rounded-lg shadow-sm'
                : 'text-[#344054] font-medium'
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};
