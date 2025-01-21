import React, { useState, useEffect } from "react";
import "./matchschedule.css";
import { Add } from "@mui/icons-material";

export default function MatchSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newMatch, setNewMatch] = useState({
    type: "home",
    team1: "Inter Miami",
    team2: "",
    time: "",
    stadium: "",
    logo1: "images/logo.png",
    logo2: "",
  });

  // Load schedule from local storage
  useEffect(() => {
    const storedSchedule = JSON.parse(localStorage.getItem("schedule")) || [];
    setSchedule(storedSchedule);
  }, []);

  // Save schedule to local storage after we updates
  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  // Handle input changes for the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMatch((prev) => ({ ...prev, [name]: value }));
  };

  const saveMatch = () => {
    const updatedMatch = {
      ...newMatch,
      logo1: newMatch.type === "home" ? "images/logo.png" : newMatch.logo1,
    };
    if (editingIndex !== null) {
      setSchedule((prev) =>
        prev.map((match, index) =>
          index === editingIndex ? updatedMatch : match
        )
      );
    } else {
      setSchedule((prev) => [...prev, updatedMatch]);
    }
    setShowModal(false);
    setEditingIndex(null);
    resetForm();
  };

  const resetForm = () => {
    setNewMatch({
      type: "home",
      team1: "Inter Miami",
      team2: "",
      time: "",
      stadium: "",
      logo1: "images/logo.png",
      logo2: "",
    });
  };

  return (
    <div className="allschedule">
      <div className="topmetchschdule">
        <div className="leftSchedule">
          <h1>Match Schedule</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at
            doloribus consectetur debitis architecto officiis ea temporibus,
            laudantium recusandae animi sed a!
          </p>
        </div>
        <div className="rightSchedule">
          <button onClick={() => setShowModal(true)}>
            <Add></Add> Add Match
          </button>
        </div>
      </div>
      <div className="matchscheduleRenderArea">
        {schedule.map((match, index) => (
          <div className="singleschedule" key={index}>
            <div className="teamsMatching">
              <div className="hometeam">
                <img src={match.logo1} alt="" />
                <h6>{match.team1}</h6>
              </div>
              <h1>VS</h1>
              <div className="awayteam">
                <img src={match.logo2} alt="" />
                <h6>{match.team2}</h6>
              </div>
            </div>
            <div className="deatilsSchedule">
              <h3>{match.type === "home" ? "Home Match" : "Away Match"}</h3>
              <h2>{match.stadium}</h2>
              <h3>{match.time}</h3>
            </div>
            <div className="btns">
              <button
                onClick={() => setEditingIndex(index) || setShowModal(true)}
              >
                Edit Match
              </button>
              <button
                onClick={() =>
                  setSchedule((prev) => prev.filter((_, i) => i !== index))
                }
              >
                Delete Match
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <h2>{editingIndex !== null ? "Edit Match" : "Add New Match"}</h2>
            <input
              type="text"
              name="team2"
              placeholder="Second Team Name"
              value={newMatch.team2}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="stadium"
              placeholder="Stadium Name"
              value={newMatch.stadium}
              onChange={handleInputChange}
            />
            <input
              type="datetime-local"
              name="time"
              value={newMatch.time}
              onChange={handleInputChange}
            />
            <select
              name="type"
              value={newMatch.type}
              onChange={handleInputChange}
            >
              <option value="home">Home</option>
              <option value="away">Away</option>
            </select>
            {newMatch.type === "away" && (
              <input
                type="text"
                name="logo1"
                placeholder="First Team Logo URL"
                value={newMatch.logo1}
                onChange={handleInputChange}
              />
            )}
            <input
              type="text"
              name="logo2"
              placeholder="Second Team Logo URL"
              value={newMatch.logo2}
              onChange={handleInputChange}
            />
            <button onClick={saveMatch}>
              {editingIndex !== null ? "Update Match" : "Save Match"}
            </button>
            <button
              onClick={() => setShowModal(false) || setEditingIndex(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
