import { GiBlackBook } from 'react-icons/gi';
import { BookCard } from '../components';

const Books = ({ books }) => {
  const currentBooks = books.map((book) => (
    <BookCard 
      key={book.id} 
      cover={book.volumeInfo.imageLinks.thumbnail} 
      title={book.volumeInfo.title} 
      author={book.volumeInfo.authors[0]} 
    />
  ));

  return (
    <div className='p-6 bg-gray-100 h-[calc(100%-116px)] overflow-auto flex flex-col items-center'>
      <h1 className='font-bold text-gray-800 text-lg mb-4'>Showing Results:</h1>
      {currentBooks}
    </div>
  )
};

export default Books;
