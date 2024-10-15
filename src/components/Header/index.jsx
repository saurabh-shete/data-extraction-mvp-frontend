import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore'; // Import auth store
import { useSidebarStore } from '../../store/sidebarStore'; // Import sidebar store

const Header = () => {
  const sidebarOpen = useSidebarStore((state) => state.sidebarOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const { user, logout } = useAuthStore(); // Access user and logout from Zustand
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null); // Reference for the dropdown

  const handleLogout = () => {
    logout();
    window.location.reload(); // Optionally reload to clear all states
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close the dropdown if clicked outside
      }
    };

    // Add event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="sticky top-0 z-50 flex w-full bg-white shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between px-4 py-4 w-full">
        {/* Hamburger Menu */}
        {/* <button aria-controls="sidebar" onClick={toggleSidebar} className="">
          <span className="block h-5 w-5 cursor-pointer">
            <span
              className={`block h-0.5 w-full bg-black dark:bg-white ${
                sidebarOpen ? 'transform rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-black dark:bg-white mt-1 ${
                sidebarOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-black dark:bg-white mt-1 ${
                sidebarOpen ? 'transform -rotate-45' : ''
              }`}
            ></span>
          </span>
        </button> */}
        <div></div>

        {/* User Avatar */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center focus:outline-none shadow-lg"
          >
            {user?.username.charAt(0).toUpperCase()}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 dark:bg-gray-700">
              <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold">{user?.username}</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-600"></div>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;