// CardGrid Component
import React from 'react';
import { Card } from './Card';

type TimePeriod = '12 months' | '30 days' | '7 days' | '24 hours';

interface CardGridProps {
  selectedPeriod: TimePeriod;
  cardData: Record<TimePeriod, Array<{ title: string; amount: string; percentage: number }>>;
  timePeriodsMap: Record<TimePeriod, string>;
}

export const CardGrid: React.FC<CardGridProps> = ({ selectedPeriod, cardData, timePeriodsMap }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
      {cardData[selectedPeriod].map((card, index) => (
        <Card
          key={index}
          title={card.title}
          amount={card.amount}
          percentage={card.percentage}
          timePeriod={timePeriodsMap[selectedPeriod]}
        />
      ))}
    </div>
  );
};
