const formatTime = (milliseconds) => {
  if (milliseconds === undefined || milliseconds === null) {
    return '--:--:--';
  }

  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num) => num.toString().padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

export default formatTime;
