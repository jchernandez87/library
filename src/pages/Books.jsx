import { BookCard } from '../components';

const Books = ({ books }) => {
  const currentBooks = books.map((book) => (
    <BookCard 
      key={book.id} 
      title={book.volumeInfo.title}
      author={book.volumeInfo.authors !== undefined ? book.volumeInfo.authors[0] : "Author not available"} 
      cover={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : "https://muskersbroughtonhall.com.au/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"}
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
