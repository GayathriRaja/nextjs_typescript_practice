"use client";
// import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
// import {postUserDetail} from "../api/database";
import { migrate } from "../api/migration";
import { postUserDetail } from "../api/database";
import { POST } from "../api/users/route";
// import {createUsers} from "../api/createUser"

export default function Home() {
  const [data, setData] = useState({})

  const handleChange = (value: string, field: string) => {
    // console.log("field", field);
    setData((prev) => ({...prev, [field]: value}))
  };


  const handleClick = async() => {
    // await migrate()
    // const data = {firstname:"neha", lastname:"kumari", email:"neha@mail.com", password:"neha123"}
    // await POST(data)
  };

  return (
    <div className=" w-2/5 h-80 bg-white rounded-lg">
      <p className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-1">
        Sign up!!
      </p>

      <div className="relative  px-10">
        <input
          id="firstname"
          type="text"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          onChange={(e) => handleChange(e.target.value, "firstname")}
        />
        <label
          htmlFor="firstname"
          className="absolute px-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Firstname
        </label>
      </div>
      <div className="relative  px-10">
        <input
          id="lastname"
          type="text"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          onChange={(e) => handleChange(e.target.value, "lastname")}
        />
        <label
          htmlFor="lastname"
          className="absolute  px-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Lastname
        </label>
      </div>
      <div className="relative  px-10">
        <input
          id="email"
          type="text"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          onChange={(e) => handleChange(e.target.value, "email")}
        />
        <label
          htmlFor="email"
          className="absolute  px-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Email
        </label>
      </div>
      <div className="relative  px-10">
        <input
          id="password"
          type="password"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          onChange={(e) => handleChange(e.target.value, "password")}
        />
        <label
          htmlFor="password"
          className="absolute  px-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Password
        </label>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="text-white ml-8   mt-3 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
    </div>
  );
}

//   <button
//     type="button"
//     className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//   >
//     Sign Up
//   </button>
//   <div className="w-3/5 mt-14 ml-24	flex flex-col  border">
//     <label htmlFor="firstame">Firstname</label>
//     <input
//       id="firstame"
//       type="text"
//       placeholder="John"
//       className="border-current peer"
//     />
//     <label htmlFor="lastname">lastname</label>
//     <input
//       id="lastname"
//       type="text"
//       placeholder="Doe"
//       className="border-current peer"
//     />
//     <label htmlFor="email">Email</label>
//     <input
//       id="email"
//       type="text"
//       placeholder="dummy@mail.com"
//       className="border-current peer"
//     />
//     <label htmlFor="password">Password</label>
//     <input
//       id="password"
//       type="password"
//       placeholder="********"
//       className="border-current peer"
//     />
//   </div>
