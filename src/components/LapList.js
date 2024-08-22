import React from 'react';
import LapCard from './LapCard';

const LapList = ({ laps }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Laps</h2>
      {laps.map((lap, index) => (
        <LapCard
          key={index}
          lapNumber={index + 1}
          duration={lap.duration}
          startTimestamp={lap.startTimestamp}
          endTimestamp={lap.endTimestamp}
        />
      ))}
    </div>
  );
};

export default LapList;