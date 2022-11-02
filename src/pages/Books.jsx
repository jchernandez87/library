import BookCard from '../components';

const Books = ({ books }) => {
  const currentBooks = books.map((book) => (
    <h1 key={book.id}>{book.volumeInfo.title}</h1>
  ));

  return <div>{currentBooks}</div>;
};

export default Books;
