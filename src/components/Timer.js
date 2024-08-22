import React from 'react';
import { formatTime } from '../utils/timeUtils';

const Timer = ({ time, currentLapTime, isRunning, onStart, onStop, onLap, onReset }) => (
  <div className="bg-dark-brown rounded-lg p-4mb-4">
    <div className="flex flex-col items-center p-6 space-y-4">
      <div className="text-4xl font-bold mb-2 text-cream">{formatTime(time)}</div>
      <div className="text-2xl mb-4 text-rust">Lap: {formatTime(currentLapTime)}</div>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-coral text-cream rounded hover:bg-rust"
          onClick={isRunning ? onStop : onStart}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          className="px-4 py-2 bg-rust text-cream rounded hover:bg-coral disabled:opacity-50"
          onClick={onLap}
          disabled={!isRunning}
        >
          Lap
        </button>
        <button
          className="px-4 py-2 bg-coral text-cream rounded hover:bg-rust"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  </div>
);

export default Timer;