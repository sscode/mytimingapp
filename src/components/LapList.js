import React from 'react';
import LapCard from './LapCard';

const LapList = ({ laps }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2 text-cream">Laps</h2>
      {laps.map((lap, index) => (
        <LapCard
          key={index}
          lapNumber={index + 1}
          duration={lap.duration}
          startTimestamp={lap.startTimestamp}
          endTimestamp={lap.endTimestamp}
          className="bg-dark-brown rounded-lg p-4 shadow-md space-y-2 mb-2"
          lapNumberClassName="text-cream"
          durationClassName="text-rust"
        />
      ))}
    </div>
  );
};

export default LapList;