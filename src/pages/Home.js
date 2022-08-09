import React from 'react';
import './Home.css';

const Home = () => (
  <div className="homePageContainer">
    <h2 className="welcome">Welcome to our Math Magic Page!</h2>
    <p className="description">
      &quot;Math Magicians&quot; is a website for all fans of mathematics.
      It is a Single Page App (SPA) that allows users to:
    </p>
    <ul className="listContainer">
      <li className="listItem">Make simple calculations</li>
      <li className="listItem">Read a random math-related quotes.</li>
    </ul>
  </div>
);

export default Home;
