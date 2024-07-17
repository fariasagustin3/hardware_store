import React from "react";
import { useStore } from "../store/store";

const Navbar = () => {
  const cart = useStore(state => state.cart);

  return (
    <nav className="w-screen bg-[var(--darkgray)] border-b-4 border-b-[var(--lightblue)]">
      <div className="py-3 px-3 flex items-center justify-between">

        {/* logo div */}
        <div className="">
          <h2 className="text-[var(--lightblue)] text-2xl font-medium">
            LOGO.
          </h2>
        </div>

        {/* input div */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-white text-black px-3 py-2 rounded-l-md focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 bg-white py-2 px-2 rounded-r-md text-[var(--lightblue)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* cart div */}
        <div className="">
          <div className="relative">
            <div className="bg-[var(--lightblue)] absolute rounded-full -top-3 -right-2 h-5 w-5 flex items-center justify-center">
              <div className="text-white text-xs">{cart.length}</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
