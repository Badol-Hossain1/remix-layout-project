import { Link } from "@remix-run/react";
import React from "react";

export default function AuthFrom() {
  return (
    <div>
      <div className="bg-white w-[400px] mx-auto mt-10 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-[300px] py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-dark bg-gray-600 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
          <Link>
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
