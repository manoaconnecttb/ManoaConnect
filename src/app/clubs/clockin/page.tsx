import React, { useState } from 'react';

interface ClockInEntry {
  id: number;
  name: string;
  time: string;
}

const ClockIn: React.FC = () => {
  // Track clock-ins in state
  const [clockIns, setClockIns] = useState<ClockInEntry[]>([]);

  // Dummy current user (replace with actual user later)
  const currentUser = 'John Doe';

  // Handle clock-in
  const handleClockIn = () => {
    const now = new Date().toLocaleString();
    const newEntry = { name: currentUser, time: now, id: Date.now() };
    setClockIns([newEntry, ...clockIns]);
  };

  return (
    <div className="text-start">
      <h5 className="mb-3">Club Activity Clock In</h5>
      <button type="button" className="btn btn-success mb-3" onClick={handleClockIn}>
        Clock In
      </button>

      {clockIns.length === 0 ? (
        <p>No clock-ins yet.</p>
      ) : (
        <ul className="list-group">
          {clockIns.map((entry) => (
            <li key={entry.id} className="list-group-item">
              <strong>{entry.name}</strong>
              clocked in at
              <em>{entry.time}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClockIn;
