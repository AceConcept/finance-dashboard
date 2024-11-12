import React from 'react';

type TimePeriod = '12 months' | '30 days' | '7 days' | '24 hours';

interface ButtonGroupProps {
  selectedPeriod: TimePeriod;
  onPeriodChange: (period: TimePeriod) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ selectedPeriod, onPeriodChange }) => {
  const periods: TimePeriod[] = ['12 months', '30 days', '7 days', '24 hours'];

  return (
    <div className="inline-flex rounded-lg shadow-custom-button">
      <div className="flex rounded-lg border border-[#D0D5DD] overflow-hidden bg-white">
        {periods.map((period, index) => (
          <React.Fragment key={period}>
            {index > 0 && <div className="w-[1px] bg-[#D0D5DD]"></div>}
            <button
              onClick={() => onPeriodChange(period)}
              className={`px-3.5 py-2 text-sm font-inter flex items-center justify-center ${
                selectedPeriod === period
                  ? 'bg-[#F9FAFB] text-[#344054] font-semibold'
                  : 'bg-white text-[#344054] font-medium hover:bg-[#F9FAFB] hover:text-[#344054]'
              }`}
            >
              {period}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
