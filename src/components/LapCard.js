import React, { useState } from 'react';
import { formatTime } from '../utils/timeUtils';

const LapCard = ({ lapNumber, duration, startTimestamp, endTimestamp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [lapLabel, setLapLabel] = useState(`Lap ${lapNumber}`);

  const handleLabelClick = () => {
    setIsEditing(true);
  };

  const handleLabelChange = (e) => {
    setLapLabel(e.target.value);
  };

  const handleLabelBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-coral p-2 mb-2 rounded">
      <div className="flex justify-between">
        {isEditing ? (
          <input
            type="text"
            value={lapLabel}
            onChange={handleLabelChange}
            onBlur={handleLabelBlur}
            autoFocus
            className="border rounded px-1 text-lg font-semibold bg-dark-brown"
          />
        ) : (
          <span onClick={handleLabelClick} className="cursor-pointer">
            {lapLabel}
          </span>
        )}
        <span>{formatTime(duration)}</span>
      </div>
      <div className="text-sm text-gray-600">
        <div>Start: {new Date(startTimestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: true}).replace(/^0+/, '')}</div>
        <div>End: {new Date(endTimestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: true}).replace(/^0+/, '')}</div>
      </div>
    </div>
  );
};

export default LapCard;