const BookCard = ({cover, title, author}) => {
  return (
    <div className="flex w-100 md:w-100 flex-col mb-4">
      <img className="h-[370px] object-contain" src={cover} alt="book-cover" />
      <div className="mt-4 text-center">
        <p className="text-gray-800 font-semibold text-base truncate">{title}</p>
        <p className="mt-2">Author: {author}</p>
        <span className="mt-2">Price: 9900</span>
      </div>
    </div>
  )
}

export default BookCard;
