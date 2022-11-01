import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home } from './pages';

function App() {
  const [ books, setBooks ] = useState([])


  const fetchBooks = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDwJseSxIeRqBwiR0x0bvCZz2dceESdO7E')
    .then(res => res.json())
    .then(data => setBooks(data.items))
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
