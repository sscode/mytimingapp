import React, { useState, useEffect } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Timer from './components/Timer';
import LapList from './components/LapList';
import LocalTime from './components/LocalTime';

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [currentLapTime, setCurrentLapTime] = useState(0);
  const [startTimestamp, setStartTimestamp] = useState(null);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
        setCurrentLapTime((prevLapTime) => prevLapTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const getLocalTimestamp = () => new Date().toLocaleString();

  const handleStart = () => {
    setIsRunning(true);
    setStartTimestamp(getLocalTimestamp());
  };

  const handleStop = () => {
    setIsRunning(false);
    handleLap();
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    setCurrentLapTime(0);
    setStartTimestamp(null);
  };

  const handleLap = () => {
    const endTimestamp = getLocalTimestamp();
    const newLap = {
      startTime: laps.length > 0 ? laps[laps.length - 1].endTime : 0,
      endTime: time,
      duration: currentLapTime,
      cumulativeTime: time,
      startTimestamp: laps.length === 0 ? startTimestamp : laps[laps.length - 1].endTimestamp,
      endTimestamp: endTimestamp,
    };
    setLaps([...laps, newLap]);
    setCurrentLapTime(0);
  };

  // Add this new component for PDF generation
  const LapsPDF = ({ laps }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Lap Times</Text>
          {laps.map((lap, index) => (
            <Text key={index} style={styles.text}>
              Lap {index + 1}: {(lap.duration / 1000).toFixed(2)}s (Start: {lap.startTimestamp}, End: {lap.endTimestamp})
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  // Add these styles for the PDF
  const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { marginBottom: 10 },
    title: { fontSize: 24, marginBottom: 10 },
    text: { fontSize: 12, marginBottom: 5 },
  });

  return (
    <div className="bg-deep-brown min-h-screen text-cream font-sans">
      <div className="container mx-auto p-4 max-w-md flex flex-col space-y-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-cream mb-6">My Timing App</h1>
          <LocalTime />
        </div>
        <div className="bg-dark-brown rounded-lg p-4 shadow-md">
          <Timer
            time={time}
            currentLapTime={currentLapTime}
            isRunning={isRunning}
            onStart={handleStart}
            onStop={handleStop}
            onLap={handleLap}
            onReset={handleReset}
          />
        </div>
        <div className="bg-dark-brown rounded-lg p-4 shadow-md">
          <LapList laps={laps} />
        </div>
        {laps.length > 0 && !isRunning && (
          <PDFDownloadLink document={<LapsPDF laps={laps} />} fileName="lap_times.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : (
                <button className="bg-coral hover:bg-rust text-cream font-bold py-2 px-4 rounded mt-4 w-full transition duration-300 ease-in-out">
                  Export PDF
                </button>
              )
            }
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
};

export default App;