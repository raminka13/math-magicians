import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
