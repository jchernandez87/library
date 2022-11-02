import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Home, Books } from "./pages";

function App() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate()

  const handleSubmit = (e, terms) => {
    e.preventDefault()

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${terms}&orderBy=relevance&maxResults=20&startIndex=0&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items)
        navigate("/books")
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="h-[100vh]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home handleSubmit={handleSubmit} />} />
        <Route path="/books" element={<Books books={books} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
