import React, { useState, useEffect } from "react";
import { getMatches, addMatch, matches } from "./COMPONENTS/API/mockApi";
import AddMatch from "./AddMatch";
import MatchCard from "./MatchCard";
import "./App.css";
import TopMenu from "./COMPONENTS/TOPMENU/TopMenu";
import Header from "./COMPONENTS/HEADER/Header";

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const savedMatches = JSON.parse(localStorage.getItem("matches"));
        if (savedMatches) {
          setMatches(savedMatches);
        } else {
          const data = await getMatches();
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

  const handleAddMatch = async (newMatch) => {
    try {
      const updatedMatches = [
        ...matches,
        { ...newMatch, id: matches.length + 1 },
      ];
      setMatches(updatedMatches);
      localStorage.setItem("matches", JSON.stringify(updatedMatches));
    } catch (err) {
      setError("Failed to add match.");
    }
  };

  const handleDeleteMatch = (matchId) => {
    const updatedMatches = matches.filter((match) => match.id !== matchId);
    setMatches(updatedMatches);
    localStorage.setItem("matches", JSON.stringify(updatedMatches)); // Update localStorage
  };

  const handleViewMatch = (matchId) => {
    const match = matches.find((match) => match.id === matchId);
    alert(
      `Viewing details for: ${match.homeTeam.name} vs ${match.awayTeam.name}`
    );
  };

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <>
          <TopMenu />
          <Header />
          <div className="matches-container">
            {matches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onDelete={handleDeleteMatch}
                onView={handleViewMatch}
              />
            ))}
          </div>
          <AddMatch onAddMatch={handleAddMatch} />
        </>
      )}
    </div>
  );
}

export default App;
