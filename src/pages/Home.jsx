import BookCard from '../components';

const Home = ({ books }) => {
  const currentBooks = books.map((book) => <h1>{book.volumeInfo.title}</h1>)
  
  return (
    <div>
      {currentBooks}
    </div>
  );
};

export default Home;
