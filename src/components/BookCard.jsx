const BookCard = ({cover, title, author}) => {
  return (
    <div className="flex sm:w-80 flex-col mb-4">
      <img className="h-[370px] object-contain" src={cover} alt="book-cover" />
      <div className="sm:w-[250px] mt-4 text-center">
        <p className="text-gray-800 font-semibold text-base">{title}</p>
        <p className="mt-2">Author: {author}</p>
        <span className="mt-2">Price: 9900</span>
      </div>
    </div>
  )
}

export default BookCard;
