import React from 'react';

class Navigation extends React.PureComponent {
  render() {
    return (
      <div className="nav-container">
        <div className="logo">MATH MAGICIAN</div>
        <ul className="nav-ul">
          <li><a href="/">HOME</a></li>
          <li><a href="/">CALCULATOR</a></li>
          <li><a href="/">QUOTE</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
