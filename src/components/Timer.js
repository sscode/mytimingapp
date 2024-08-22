import React from 'react';
import { formatTime } from '../utils/timeUtils';

const Timer = ({ time, currentLapTime, isRunning, onStart, onStop, onLap, onReset }) => (
  <div className="bg-white rounded-lg shadow-md mb-4">
    <div className="flex flex-col items-center p-6">
      {/* Cumulative time */}
      <div className="text-4xl font-bold mb-2">{formatTime(time)}</div>
      {/* Current lap time */}
      <div className="text-2xl mb-4">Lap: {formatTime(currentLapTime)}</div>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={isRunning ? onStop : onStart}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          onClick={onLap}
          disabled={!isRunning}
        >
          Lap
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  </div>
);

export default Timer;