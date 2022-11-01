import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
