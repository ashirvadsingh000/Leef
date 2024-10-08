import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import leef from '../../public/leef.png' 
import { BiSearch } from 'react-icons/bi';
 // Importing user icon from react-icons
const Header = ({ isLoggedIn, username, handleLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <header className="flex items-center justify-between px-4 md:py-2 py-1 bg-gray-800 text-white sticky top-0">
      {/* Left side: Image and Text */}
      <div className="flex items-center">
        <img
          src={leef} // Replace with your logo URL
          alt="Logo"
          className=" h-12 w-12 mr-4"
        />
        <Link to="" className=" md:text-3xl text-2xl font-poppins font-bold">
          Leef<span className=' text-green-600'>.gp</span>
        </Link>

        <div className='bg-gradient-to-r from-green-500 via-black to-pink-500 rounded-md p-[0.9px] ml-8 h-9 w-96 sm:flex hidden md:ml-14' ><form action="" className='flex bg-gray-800 h-full w-full rounded-md  border-none;
]'>
        <button className='p-2'><BiSearch className=' h-5 w-6'/></button><input type="search" name="" id="" className=' bg-transparent p-2 h-full w-full font-poppins
        border-none outline-none p-2' placeholder='Search' />
        </form></div>
      </div>

      {/* Right side: User Icon */}
      <div className="flex items-center">
      {!isLoggedIn ? (
        <Link to="/login" className="flex items-center text-lg">
          <FaUserCircle className="h-10 w-8 mr-2 hover:text-green-600 " />
        </Link>
      ) : (
        <div onClick={() => setShowDropdown(!showDropdown)} className="flex items-center cursor-pointer text-white">
            <FaUserCircle className="mr-2 text-2xl" />
            <span>{username}</span>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2">
                <button onClick={handleLogout} className="px-4 py-2 w-full text-left hover:bg-gray-200">
                  Logout
                </button>
              </div>
            )}
            </div>
      )}
      </div>
    </header>

  )
}

export default Header
