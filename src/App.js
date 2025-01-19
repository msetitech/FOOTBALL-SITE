import React, { useState, useEffect } from "react";
import { getMatches, addMatch } from "./mockApi"; // Using mockApi for simulation
import AddMatch from "./AddMatch";

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from localStorage or mock API when the component mounts
  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const savedMatches = JSON.parse(localStorage.getItem("matches"));
        if (savedMatches) {
          setMatches(savedMatches); // Load matches from localStorage if available
        } else {
          const data = await getMatches(); // Fetch initial matches if nothing is saved
          setMatches(data);
        }
      } catch (err) {
        setError("Failed to fetch matches.");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  // Function to add a new match
  const handleAddMatch = async (newMatch) => {
    try {
      // Simulate adding the match (we can update matches using addMatch here)
      const updatedMatches = [
        ...matches,
        { ...newMatch, id: matches.length + 1 },
      ];
      setMatches(updatedMatches); // Update matches in state

      // Save updated matches in localStorage
      localStorage.setItem("matches", JSON.stringify(updatedMatches));
    } catch (err) {
      setError("Failed to add match.");
    }
  };

  return (
    <div className="App">
      <h1>Football Matches</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <>
          <ul>
            {matches.map((match) => (
              <li key={match.id}>
                <strong>{match.homeTeam}</strong> vs{" "}
                <strong>{match.awayTeam}</strong> -{" "}
                {new Date(match.utcDate).toLocaleString()}
              </li>
            ))}
          </ul>
          <AddMatch onAddMatch={handleAddMatch} />
        </>
      )}
    </div>
  );
}

export default App;
