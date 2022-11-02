import { useState,useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs'

const Home = ({ handleSubmit }) => {
  const focusRef = useRef(null)

  useEffect(() => {
    focusRef.current.focus()
  },[])
  
  const SearchBar = () => {
    const [ search, setSearch ] = useState("")

    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    return (
      <form className='flex flex-row items-center' onSubmit={(e) => handleSubmit(e, search)}>
        <BsSearch className="absolute ml-2 text-gray-800 text-lg" />
        <input
          ref={focusRef}
          className="h-10 w-80 shadow-md rounded-lg pl-8 focus:outline-none"
          placeholder='Type your search'
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
         />
      </form>
    )
  }

  return (
    <div className="h-[calc(100%-116px)] bg-gradient-to-r from-orange-300 to-orange-100 flex flex-col justify-start pt-40 items-center">
      <div className="w-80">
        <h1 className="text-[32px] font-bold leading-tight mb-2">Welcome to my library App. </h1>
        <p className="font-bold text-xl mb-8">Type some terms to search for a collection of books from the google books API</p>
      </div>
      <SearchBar handleSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
