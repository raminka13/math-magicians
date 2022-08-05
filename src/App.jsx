import Calculator from './components/Calculator';
import Navigation from './components/Nav';

function App() {
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

export default App;
