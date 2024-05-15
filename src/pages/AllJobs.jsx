import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllJobs = () => {
  // Getting data using TanStack queries
  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getData(),
  });

  // getting all jobs data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
    return data;
  };

  // search function
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const text = e.target.search.value;
  //   const getData = async () => {
  //     const { data } = await axios(
  //       `${import.meta.env.VITE_API_URL}/jobs-title/${text}`
  //     );
  //     setSearch(data);
  //   };
  //   getData(search);
  // };

  const pages = [1, 2, 3];

  if (isLoading)
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-white/90"></div>
      </div>
    );

  return (
    <div className="container p-20 pt-28 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div>
        <div className="max-w-[90%] mx-auto">
          <form 
          // onSubmit={handleSearch}
          >
            <div className="relative mt-10">
              <IoSearch className="absolute top-1/2 -translate-y-[45%] left-6 dark:text-black/90" />
              <input
                type="text"
                name="search"
                className="bg-gray-100 w-full py-5 px-20 border rounded-lg text-black/80 text-md"
                placeholder="Job title - Graphics design | Web development"
              />
              <input
                type="submit"
                value="Search"
                className="absolute right-2 top-1/2 -translate-y-[50%] rounded-full bg-black/90 px-6 py-3 text-xs font-bold text-white/90 duration-300 active:scale-95 uppercase font-poppins"
              />
            </div>
          </form>
          {/* <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Deadline</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div> */}
          {/* <button className="btn">Reset</button> */}
        </div>
        <div className="">
          <div className="overflow-x-auto ">
            <table className="min-w-[90%] border mx-auto border-gray-400 my-6">
              <thead>
                <tr className="bg-[#333333] text-white/90">
                  <th className="py-3 px-6 text-left border-b">Job Title</th>
                  <th className="py-3 px-6 text-center border-b">
                    Job Posting Date
                  </th>
                  <th className="py-3 px-6 text-center border-b">
                    Application Deadline
                  </th>
                  <th className="py-3 px-6  border-b text-center">
                    Salary range
                  </th>
                  <th className="py-3 px-6  border-b text-end">View Details</th>
                </tr>
              </thead>
              <tbody>
                {jobs?.data?.map((job) => (
                  <tr
                    key={job._id}
                    className="hover:bg-zinc-800  text-white/50 transition duration-300"
                  >
                    <td className="py-4 px-6 border-b text-start">
                      {job.title}{" "}
                    </td>
                    <td className="py-4 px-6 border-b text-center">
                      {job.postDate}
                    </td>
                    <td className="py-4 px-6 border-b text-center">
                      {new Date(job.applyDeadline).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 border-b text-center">
                      ${job.min_price} - ${job.max_price}
                    </td>
                    <td className="py-4 px-6 border-b text-end">
                      <Link>
                        <button className="bg-white/80 rounded-full px-3 py-0.5 text-black/80 text-base font-medium">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <button className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-zinc-500  hover:text-white">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            key={btnNum}
            className={`hidden text-white/90 bg-zinc-800 px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-zinc-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-zinc-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllJobs;
