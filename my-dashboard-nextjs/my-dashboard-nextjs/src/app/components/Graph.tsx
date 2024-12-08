import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FaChartBar, FaChartLine } from 'react-icons/fa';

type GraphType = 'bar' | 'line';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const sampleData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1900 },
  { name: 'Mar', value: 1600 },
  { name: 'Apr', value: 0 },
  { name: 'May', value: 2200 },
  { name: 'Jun', value: 2900 },
  { name: 'Jul', value: 3100 },
  { name: 'Aug', value: 2800 },
  { name: 'Sep', value: 3400 },
  { name: 'Oct', value: 3200 },
  { name: 'Nov', value: 3700 },
  { name: 'Dec', value: 4000 }
];

interface GraphProps {
  data?: Array<{ name: string; value: number }>;
  type: GraphType;
  onTypeChange: (type: GraphType) => void;
}

export const Graph: React.FC<GraphProps> = ({ data = sampleData, type, onTypeChange }) => {
  // Transform data to ensure we have all 12 months
  const monthlyData = months.map((month) => {
    const existingData = data.find((d) => d.name === month);
    return {
      name: month,
      value: existingData ? existingData.value : 0
      
    };
  });

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="text-[16px] max-[375px]:text-[10px] text-gray-900 font-semibold mb-1">
            Total Projected EOY Balance
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-[36px] max-[375px]:text-lg font-semibold text-gray-900">
              $402,025.54
            </p>
            <span className="text-[12px] max-[375px]:text-[8px] font-normal font-inter text-[#018030] bg-[#E1FAEA] px-[4px] py-0 rounded-md">
              +2.1%
            </span>
          </div>
        </div>
        <div className="flex items-center border border-[#D0D5DD] rounded-md shadow-sm w-[86px] h-[40px] overflow-hidden">
          <button
            onClick={() => onTypeChange('bar')}
            className={`w-[43px] h-full flex items-center justify-center ${
              type === 'bar' ? 'bg-white text-black' : 'bg-[#F5F5F5] text-gray-500'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path 
                d="M7.5 5.83333H3.83333C3.36662 5.83333 3.13327 5.83333 2.95501 5.92416C2.79821 6.00406 2.67072 6.13154 2.59083 6.28834C2.5 6.4666 2.5 6.69996 2.5 7.16667V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5H7.5M7.5 17.5H12.5M7.5 17.5L7.5 3.83333C7.5 3.36662 7.5 3.13327 7.59083 2.95501C7.67072 2.79821 7.79821 2.67072 7.95501 2.59083C8.13327 2.5 8.36662 2.5 8.83333 2.5L11.1667 2.5C11.6334 2.5 11.8667 2.5 12.045 2.59083C12.2018 2.67072 12.3293 2.79821 12.4092 2.95501C12.5 3.13327 12.5 3.36662 12.5 3.83333V17.5M12.5 9.16667H16.1667C16.6334 9.16667 16.8667 9.16667 17.045 9.25749C17.2018 9.33739 17.3293 9.46487 17.4092 9.62167C17.5 9.79993 17.5 10.0333 17.5 10.5V16.1667C17.5 16.6334 17.5 16.8667 17.4092 17.045C17.3293 17.2018 17.2018 17.3293 17.045 17.4092C16.8667 17.5 16.6334 17.5 16.1667 17.5H12.5" 
                stroke={type === 'bar' ? '#141414' : '#737373'} 
                strokeWidth="1.66667" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="w-px h-full bg-[#D0D5DD]" />
          <button
            onClick={() => onTypeChange('line')}
            className={`w-[43px] h-full flex items-center justify-center ${
              type === 'line' ? 'bg-white text-black' : 'bg-[#F5F5F5] text-gray-500'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path 
                d="M18.3307 5.83203L11.7735 12.3892C11.4435 12.7192 11.2785 12.8842 11.0882 12.9461C10.9209 13.0004 10.7406 13.0004 10.5732 12.9461C10.3829 12.8842 10.2179 12.7192 9.88792 12.3892L7.60687 10.1082C7.27686 9.77816 7.11185 9.61315 6.92158 9.55133C6.75421 9.49695 6.57392 9.49695 6.40655 9.55133C6.21627 9.61315 6.05127 9.77816 5.72125 10.1082L1.66406 14.1654M18.3307 5.83203H12.4974M18.3307 5.83203V11.6654" 
                stroke={type === 'line' ? '#141414' : '#737373'} 
                strokeWidth="1.66667" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid 
            horizontal={true}
            vertical={false}
            stroke="#E5E5E5"
          />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#667085' }} 
            angle={0} 
            textAnchor="middle"
            axisLine={{ stroke: '#E5E5E5' }}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip 
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div style={{ 
                    backgroundColor: '#fff',
                    border: '1px solid #E4E7EC',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    width: '144px'
                  }}>
                    <div style={{
                      color: '#737373',
                      fontSize: '12px',
                      fontWeight: '400',
                      marginBottom: '4px',
                      lineHeight: '20px'
                    }}>
                      {`${label}, 2024`}
                    </div>
                    <div style={{
                      color: '#101828',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '13px',
                      lineHeight: '20px',
                      margin: 0
                    }}>
                      <span>Income</span>
                      <span>${payload[0].value}</span>
                    </div>
                  </div>
                );
              }
              return null;
            }}
            cursor={false}
          />
          <Bar 
            dataKey="value" 
            fill="#F2F4F7"
            radius={[4, 4, 0, 0]}
            style={{ cursor: 'pointer' }}
            activeBar={{ fill: '#111927' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
