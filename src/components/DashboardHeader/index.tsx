import { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../contexts/AuthContext";

type DashboardHeaderProps = {
  searchBy: (term: string) => void;
};

export default function DashboardHeader({ searchBy }: DashboardHeaderProps) {
  const { register, handleSubmit } = useForm();

  const { user } = useContext(AuthContext);

  const handleSearch = ({ search }: { search: string }): void => {
    searchBy(search);
  };

  return (
    <header className="header bg-white shadow py-4 px-4">
      <div className="header-content flex items-center flex-row">
        <form onSubmit={handleSubmit(handleSearch)}>
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
              {...register("search")}
              id="search"
              type="text"
              name="search"
              className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
              placeholder="O que você deseja?"
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
            {user?.avatar_url && (
              <img
                alt="user-avatar"
                src={user?.avatar_url}
                className="h-10 w-10 bg-gray-200 border rounded-full"
              />
            )}
            <span className="flex flex-col ml-2">
              <span className="truncate w-20 font-semibold tracking-wide leading-none">
                {user?.name}
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
