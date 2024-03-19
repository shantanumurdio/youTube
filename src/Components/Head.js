import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggelMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import darkMode from "../utils/darkMode";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  // console.log(searchQuery);
  useEffect(() => {
    // make an api call after every key press
    // but the difference between 2 api call is <200ms
    //decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const darkMenuHandler = () =>{
    dispatch(darkMode());
  }
 

  const toggelMenuHandler = () => {
    dispatch(toggelMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggelMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="Menu"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt="YouTube Logo"
          />
        </a>
      </div>
      <div className="col-span-10 ">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-500 rounded-l-full   p-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 p-2 rounded-r-full bg-gray-200 px-5 py-2 ">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-300">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex text-center">
        <img
          className="h-8 text-center"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="User Profile"
        />
        <span onClick={() => darkMenuHandler()} className="pl-3 m-1 text-center">🌓</span>
      </div>
    </div>
  );
};

export default Head;

/**
 * key - i
 * -render the component
 * - call useEffect
 * - start the timer and make an API call after 200ms
 *
 * key - ip
 * - re-render the component
 * useEffect();
 * start the timer and make an API call after 200ms
 *
 */
