import React from 'react';
import ReactECharts from 'echarts-for-react';
import { FaChartBar, FaChartLine } from 'react-icons/fa';

type GraphType = 'bar' | 'line';

interface GraphProps {
  data: Array<{ name: string; value: number }>;
  type: GraphType;
  onTypeChange: (type: GraphType) => void;
}

export const Graph: React.FC<GraphProps> = ({ data, type, onTypeChange }) => {
  const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#fff',
      borderColor: '#E5E7EB',
      borderRadius: 6,
      padding: 8,
      textStyle: {
        color: '#101828'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.map(item => item.name),
      axisLine: {
        lineStyle: {
          color: '#E5E7EB'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#667085',
        margin: 14,
        align: 'center'
      }
    },
    yAxis: {
      type: 'value',
      interval: 800,
      min: 0,
      max: 4000,
      splitLine: {
        lineStyle: {
          color: '#E5E7EB'
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    series: [
      {
        data: data.map(item => item.value),
        type: type,
        smooth: type === 'line',
        showSymbol: false,
        barWidth: '60%',
        itemStyle: {
          color: '#004EEB',
          borderRadius: type === 'bar' ? [4, 4, 0, 0] : 0
        },
        lineStyle: {
          width: 2
        },
        emphasis: {
          focus: 'series'
        }
      }
    ]
  };

  return (
    <div className="w-full h-[369px] p-6 bg-white rounded-xl border border-[#E4E7EC]">
      <div className="flex justify-between items-center mb-8 pb-5 border-b border-[#E4E7EC]">
        <h3 className="text-lg font-semibold text-[#101828]">Performance</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onTypeChange('bar')}
            className={`p-2 rounded ${type === 'bar' ? 'bg-gray-100' : ''}`}
          >
            <FaChartBar />
          </button>
          <button
            onClick={() => onTypeChange('line')}
            className={`p-2 rounded ${type === 'line' ? 'bg-gray-100' : ''}`}
          >
            <FaChartLine />
          </button>
        </div>
      </div>
      
      <div className="w-full h-[240px]">
        <ReactECharts 
          option={option}
          style={{ height: '100%', width: '100%' }}
          opts={{ 
            renderer: 'svg',
            width: 1132,
            height: 240
          }}
        />
      </div>
    </div>
  );
};
