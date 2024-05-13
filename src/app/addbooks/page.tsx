"use client";
import React, { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
// import { useState } from "react";
import { migrate } from "../api/migration";
import { postUserDetail } from "../api/database";
import { POST } from "../api/users/route";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [data, setData] = useState({});
  const router = useRouter()

  const handleChange = (value: string, field: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("data",data);

    fetch("http://localhost:3000/api", {
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    }).then((res)=>router.push("/listBooks") ).catch((err)=>console.log("respone", err))

  };

  return (
    <div className="w-2/5 h-80 bg-white rounded-lg">
      <p class=" font-bold text-transparent text-center text-4xl bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Add Books!!
      </p>{" "}
      <form method="POST" onSubmit={handleClick} action="http://localhost:3000">
        <div className="relative  px-10">
          <input
            id="name"
            type="text"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => handleChange(e.target.value, "name")}
          />
          <label
            htmlFor="name"
            className="absolute px-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Name
          </label>
        </div>
        <div className="relative  px-10">
          <input
            id="description"
            type="text"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => handleChange(e.target.value, "description")}
          />
          <label
            htmlFor="description"
            className="absolute  px-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Description
          </label>
        </div>
        <div className="relative  px-10">
          <input
            id="author"
            type="text"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => handleChange(e.target.value, "author")}
          />
          <label
            htmlFor="author"
            className="absolute  px-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Author
          </label>
        </div>
        <div className="relative  px-10">
          <input
            id="releaseYear"
            type="text"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => handleChange(e.target.value, "releaseYear")}
          />
          <label
            htmlFor="releaseYear"
            className="absolute  px-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Year Of Release
          </label>
        </div>
        <button
          type="submit"
          className="text-white ml-8   mt-3 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Books
        </button>
      </form>
    </div>
  );
}
