import React from 'react';

interface TimeframeButtonsProps {
  setTimeframe: (timeframe: string) => void;
}

const TimeframeButtons: React.FC<TimeframeButtonsProps> = ({ setTimeframe }) => {
  return (
    <div>
      <button onClick={() => setTimeframe('daily')}>Daily</button>
      <button onClick={() => setTimeframe('weekly')}>Weekly</button>
      <button onClick={() => setTimeframe('monthly')}>Monthly</button>
    </div>
  );
};

export default TimeframeButtons;