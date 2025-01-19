export const matches = [
  {
    id: 1,
    homeTeam: "Manchester United",
    awayTeam: "Arsenal",
    utcDate: "2025-01-25T15:00:00Z",
  },
  {
    id: 2,
    homeTeam: "Chelsea",
    awayTeam: "Liverpool",
    utcDate: "2025-01-26T17:30:00Z",
  },
];

// Simulating an API call to fetch matches
export const getMatches = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(matches);
    }, 500); // Simulates network delay
  });
};

// Simulating an API call to add a new match
export const addMatch = (newMatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      matches.push({ ...newMatch, id: matches.length + 1 });
      resolve(matches);
    }, 500); // Simulates network delay
  });
};
