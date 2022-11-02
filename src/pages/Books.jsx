import { BookCard } from '../components';

const Books = ({ books }) => {
  const filteredBooks = books.filter(book => book.volumeInfo.authors && book.volumeInfo.imageLinks)


  const currentBooks = filteredBooks.map((book) => (
    <BookCard 
      key={book.id} 
      title={book.volumeInfo.title}
      author={book.volumeInfo.authors[0]} 
      cover={book.volumeInfo.imageLinks.thumbnail}
    />
  ));

  return (
    <div className="h-[calc(100%-116px)] overflow-y-auto">
      <h1 className='text-center font-bold text-gray-800 text-lg pt-6 bg-gray-100'>Showing Results:</h1>
      <div className='p-6 bg-gray-100 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {currentBooks}
      </div>
    </div>
  )
};

export default Books;
