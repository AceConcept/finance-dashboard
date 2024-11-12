// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns';

interface CalendarProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (range: { start: Date | null; end: Date | null; preset?: string }) => void;
}

const presetRanges = [
  'Today',
  'Yesterday',
  'This week',
  'Last week',
  'This month',
  'Last month',
  'This year',
  'Last year',
  'All time'
];

// First, define an interface for the onApply parameter
interface DateRange {
  start: Date | null;
  end: Date | null;
  preset?: string;  // Make preset optional with undefined
}

export const Calendar: React.FC<CalendarProps> = ({ isOpen, onClose, onApply }) => {
  const [selectedPreset, setSelectedPreset] = useState<string | undefined>(undefined);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nextMonth, setNextMonth] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)));

  const handlePresetClick = (preset: string) => {
    setSelectedPreset(preset);
    setStartDate(null);
    setEndDate(null);
  };

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      setSelectedPreset(undefined);
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  const handleApply = () => {
    onApply({
      start: startDate,
      end: endDate,
      preset: selectedPreset
    });
    onClose();
  };

  const renderCalendarGrid = (month: Date) => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const days = eachDayOfInterval({ start, end });

    // Get day names for header
    const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    // Calculate the first day offset
    const firstDayOffset = start.getDay() === 0 ? 6 : start.getDay() - 1;
    const prefixDays = Array(firstDayOffset).fill(null);
    
    return (
      <div className="w-[280px]">
        <div className="flex items-center justify-between mb-4">
          <button 
            className="p-1 hover:bg-gray-100 rounded-full"
            onClick={() => setCurrentMonth(new Date(month.setMonth(month.getMonth() - 1)))}
          >
            &lt;
          </button>
          <span className="font-medium">
            {format(month, 'MMMM yyyy')}
          </span>
          <button 
            className="p-1 hover:bg-gray-100 rounded-full"
            onClick={() => setCurrentMonth(new Date(month.setMonth(month.getMonth() + 1)))}
          >
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {/* Week day headers */}
          {weekDays.map((day) => (
            <div 
              key={day} 
              className="h-8 flex items-center justify-center text-xs text-gray-500"
            >
              {day}
            </div>
          ))}

          {/* Empty cells for offset */}
          {prefixDays.map((_, index) => (
            <div key={`empty-${index}`} className="h-8" />
          ))}

          {/* Calendar days */}
          {days.map((day) => {
            const isSelected = startDate && endDate && 
              day >= startDate && day <= endDate;
            const isRangeStart = startDate && isSameDay(day, startDate);
            const isRangeEnd = endDate && isSameDay(day, endDate);

            return (
              <button
                key={day.toString()}
                onClick={() => handleDateClick(day)}
                className={`
                  h-8 flex items-center justify-center text-sm rounded-full
                  ${isToday(day) ? 'border border-blue-500' : ''}
                  ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-100'}
                  ${isRangeStart || isRangeEnd ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
                  ${!isSameMonth(day, month) ? 'text-gray-300' : ''}
                `}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl">
        <div className="flex">
          {/* Preset ranges */}
          <div className="w-48 border-r pr-4">
            {presetRanges.map((preset) => (
              <button
                key={preset}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  selectedPreset === preset ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                }`}
                onClick={() => handlePresetClick(preset)}
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Calendar grids */}
          <div className="flex gap-8 pl-4">
            {renderCalendarGrid(currentMonth)}
            {renderCalendarGrid(nextMonth)}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-6 pt-4 border-t">
          <div className="flex items-center gap-2">
            <span>
              {startDate && format(startDate, 'MMM dd, yyyy')}
              {startDate && endDate && ' - '}
              {endDate && format(endDate, 'MMM dd, yyyy')}
              {selectedPreset && selectedPreset}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
