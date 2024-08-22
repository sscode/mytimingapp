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
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-2 text-cream">Local Time</h2>
      <p className="text-rust">{formatTime(currentTime)}</p>
    </div>
  );
};

export default LocalTime;