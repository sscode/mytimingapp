import React, { useState, useEffect } from 'react';

const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="text-xl font-semibold mb-4">
      {formatTime(currentTime)}
    </div>
  );
};

export default LocalTime;