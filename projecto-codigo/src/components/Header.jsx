import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
       <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
    <a href="https://flowbite.com" className="flex items-center">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 mr-3"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Codigo20
      </span>
    </a>
    <div className="flex items-center md:order-2">
      <a
        href="#"
        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      >
        Login
      </a>
      <a
        href="#"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sign up
      </a>
      <button
        data-collapse-toggle="mega-menu-icons"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mega-menu-icons"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      id="mega-menu-icons"
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    >
      <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            aria-current="page"
          >
            BIO
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            PSICO
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            ESPIRITUAL
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            FAQ
          </a>
        </li>


        <li>
          <Link
            to="/precio"
            className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            PRECIOS
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header