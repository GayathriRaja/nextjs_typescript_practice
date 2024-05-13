"use client";
import { useEffect, useState } from "react";

const Listbooks = () => {
  const [getBookLists, setGetBookLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((res) => setGetBookLists(res.filter((list, index) => index > 20)))
      .catch((err) => console.log("respone", err));
  }, []);

  console.log("getBookLists", getBookLists);

  return (
    <div className="w-1/2 h-80 bg-white rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
          </tr>
        </thead>
        <tbody>
          {getBookLists.map((book) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                  {book.name}
                </td>
                <td className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                  {book.description}
                </td>
                <td className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                  {book.author}
                </td>
                <td class="flex items-center px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
            </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Listbooks;
