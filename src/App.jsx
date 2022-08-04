import React from 'react';
import Calculator from './components/Calculator';
import Navigation from './components/Nav';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <header><Navigation /></header>
        <main className="main-container">
          <Calculator />
        </main>
        <footer className="footer-container" />
      </div>
    );
  }
}

export default App;