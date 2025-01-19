import React, { useState, useEffect } from "react";
import { getMatches } from "./mockApi"; // Import your mock API function

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMatches(); // Fetch data from the mock API
        setMatches(data);
      } catch (err) {
        setError("Failed to fetch matches.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Football Matches</h1>
      {loading ? (
        <p>Loading matches...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <ul>
          {matches.map((match) => (
            <li key={match.id}>
              <strong>{match.homeTeam}</strong> vs{" "}
              <strong>{match.awayTeam}</strong> -{" "}
              {new Date(match.utcDate).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
