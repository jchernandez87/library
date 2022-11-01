import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => setIsToggle((prevToggle) => !prevToggle);

  const DropMenu = () => (
    <ul className={`flex flex-col w-100 items-start p-6 bg-orange-200`}>
      <li className="text-md text-gray-600 font-semibold border-b border-gray-600">
        Home
      </li>
      <li className="text-md text-gray-600 font-semibold border-b border-gray-600 mt-4">
        Favorites
      </li>
      <li className="text-md text-gray-600 font-semibold border-b border-gray-600 mt-4">
        Favorites
      </li>
    </ul>
  );

  return (
    <nav className="bg-orange-400 shadow-lg">
      <div className="flex flex-row p-4 items-center justify-between">
        <div className="flex flex-row items-center">
          <GiOpenBook className="text-gray-800 text-xl" />
          <h2 className="font-bold text-gray-800 text-lg ml-2">Library</h2>
        </div>
        <FaBars onClick={handleToggle} className="text-gray-800 text-xl" />
      </div>
       {isToggle && <DropMenu />}
    </nav>
  );
};

export default NavBar;
