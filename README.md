# Football Website Interface

This project is a simple Football webpage interface developed using React. The purpose is to demonstrate component-based architecture, state management,useEffect Props and styling.

## Project Description

The interface consists of three main Routing Pages:

1. **Home:** Displays the home contents that include.

- - **Home Contents:** Display Name about and Next Match and previous Goal Scored
- - **About Contents :** Display about football Club
- - **Trophy Content :** Display winned Trophy
- - **League Table :** Display League Table
- - **Team Legend :** Display Team Regend
- - **Match Schedule :** Display Match Schedule
- - **Photo Of the day** : Display Photo of the day
- - **Footer :** Display Footer Content

2. **About:** Provides an overview of the Team mission and vission.

3. **Blog:** Include Posts of the team.

The project is designed to be user-friendly, visually appealing, and easily maintainable, meeting the assignment requirements.

## Features

- Component-based architecture:
  - Reusable components for the Footer, Navigation, Home Content, and all other components.
- Styled using a dedicated `different css file depend on components` file for a cohesive design.
- Extendable functionalities like adding more components, routing, or API integrations.

## Project Structure

```
FOOTBALL-SITE/
├── public/
|__ images
|__ blogData.json
├── src/
│   ├── components/
│   │   ├── ABOUT
|   |   |      ├──Ablout.jsx
|   |   |      ├──Ablout.css
│   │   ├── FIXTUREANDRESULT
|   |   |      ├──fixture.css
|   |   |      ├──Fixture.jsxs
|   |   |      ├──FixtureComp.jsx
|   |   |      ├──LeagueTable.jsx
|   |   |      ├──Results.jsx
|   |   |      ├──StatsTable.jsx
│   │   ├── FOOTER
|   |   |      ├──footer.css
|   |   |      ├──Footer.jsx
│   │   ├── HEADER
|   |   |      ├──header.css
|   |   |      ├──Header.jsx
│   │   ├── MATCH
|   |   |      ├──match.css
|   |   |      ├──Match.jsx
│   │   ├── MATCHSCHEDULE
|   |   |      ├──matchschedule.css
|   |   |      ├──Matchschedule.jsx
│   │   ├── TEAMLEGEND
|   |   |      ├──teamlegend.css
|   |   |      ├──TeamLegend.jsx
│   │   ├── TOPMENU
|   |   |      ├──topmenu.css
|   |   |      ├──Topmenu.jsx
│   │   ├── TROPHY
|   |   |      ├──trophy.css
|   |   |      ├──Trophy.jsx
|   |   |──────|
|   |   |
│   ├── About.jsx
│   ├── About.css
│   ├── Blog.jsx
│   ├── HomeComponent.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
|───|
```

## Instructions to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/msetitech/FOOTBALL-SITE.git
   ```
2. Navigate to the project directory:
   ```bash
   cd FOOTBALL-SITE
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   ```bash
   npm install react-router-dom
   ```
   ```bash
   npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
   ```
4. Run the application:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the webpage.

6. Youcan also Visit HostedWebsite at `https://football-site-one.vercel.app/` to view the webpage.

## License

This project is for educational purposes and may not be used for commercial purposes without permission.
