import { Fragment, useContext, useEffect } from "react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import { AuthContext } from "../../contexts/AuthContext";
import { GetServerSideProps } from "next";
import { getAPIClient } from "../../services/config/axios";
import { parseCookies } from "nookies";

// const navigation = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];
// const profile = ["Your Profile", "Settings"];
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // api.get("/users");
  }, []);

  return (
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      <header className="header bg-white shadow py-4 px-4">
        <div className="header-content flex items-center flex-row">
          <form action="#">
            <div className="hidden md:flex relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input
                id="search"
                type="text"
                name="search"
                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
                placeholder="Search..."
              />
            </div>
            <div className="flex md:hidden">
              <a
                href="#"
                className="flex items-center justify-center h-10 w-10 border-transparent"
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>
          </form>
          <div className="flex ml-auto">
            <a className="flex flex-row items-center">
              <img
                src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                className="h-10 w-10 bg-gray-200 border rounded-full"
              />
              <span className="flex flex-col ml-2">
                <span className="truncate w-20 font-semibold tracking-wide leading-none">
                  John Doe
                </span>
                <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">
                  Manager
                </span>
              </span>
            </a>
          </div>
        </div>
      </header>
      <div className="main-content flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

        <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"></div>
      </div>
    </main>
  );
}
