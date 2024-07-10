import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DarkModeToggle from './DarkModeToggle';
import Authentication from './Modal/Authentication';
import { logout} from '../features/auth/authSlice';
import Logo from '../assets/Logo/titlisLogo.png';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import Swal from 'sweetalert2';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);


  useEffect(() => {
    let timer;
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();
      const timeUntilExpiration = expirationTime - currentTime;

      if (timeUntilExpiration > 0) {
        timer = setTimeout(() => {
          dispatch(logout());
        }, timeUntilExpiration);
      } else {
        dispatch(logout());
      }
    }

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [dispatch, token]);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
      }
    });
  };

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? 'md:text-black lg:text-red-500 bg-red-500 md:bg-transparent block py-2 pl-3 pr-4 rounded md:p-0'
      : 'block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-titlisRed md:p-0 dark:text-white dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700';
  };

  return (
    <nav className="bg-white w-full z-20 absolute md:relative top-0 left-0 dark:border-gray-600 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-[5rem] lg:h-[6rem] p-4" alt="Titlis Logo" />
        </Link>
        <div className="flex md:order-2 items-center">
          <DarkModeToggle />
          {!user ? (
            <button
              onClick={openLoginModal}
              className="text-white bg-titlisRed hover:bg-red-600 focus:outline-none font-medium rounded-full text-xl px-8 md:px-7 py-2 text-center dark:focus:ring-yellow-900 hidden md:inline-block"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white bg-titlisRed hover:bg-red-600 focus:outline-none font-medium rounded-full text-xl px-8 md:px-7 py-2 text-center dark:focus:ring-yellow-900 hidden md:inline-block"
            >
              Logout
            </button>
          )}
          {isLoginModalOpen && <Authentication onClose={closeLoginModal} />}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex p-2 w-10 justify-center text-xl rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <BsFillGrid3X3GapFill className="text-black" />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 text-lg ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className={getLinkClasses('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/all/packages" className={getLinkClasses('/all/packages')}>
                Packages
              </Link>
            </li>
            <li>
              <Link to="/news" className={getLinkClasses('/news')}>
                Feeds
              </Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClasses('/about')}>
                About
              </Link>
            </li>
            {!user && (
              <li>
                <button
                  onClick={openLoginModal}
                  className="block py-2 pl-3 pr-4 md:hidden text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-titlisRed md:p-0 md:dark:hover:text-titlisRed dark:text-white dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700"
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
