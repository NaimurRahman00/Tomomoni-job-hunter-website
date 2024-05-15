import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import MyDocument from "./MyDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useQuery } from "@tanstack/react-query";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);

  // Getting data using TanStack queries
  const { data: bids = [], isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getData(),
  });

  // getting all jobs data using axios
  const getData = async () => {
    return await axios(
      `${import.meta.env.VITE_API_URL}/my-email/${user?.email}`
    );
  };

  // filter data
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Choose One");
  // array of options
  const options = ["On Site", "Remote", "Part Time", "Hybrid"];

  // const handleFilter = (option) => {
  //   const filterdData = bidsData.filter((bid) => bid.category === option);
  //   setBidsData(filterdData);
  // };

  if (isLoading)
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-white/90"></div>
      </div>
    );

  return (
    <section className="container p-20 pt-24 mx-auto">
      <div className="flex items-center justify-between gap-x-3">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-medium text-gray-300">
            All the jobs I applied to
          </h2>
          <span className="px-3 py-1 text-sm text-white/90 bg-white/30 rounded-full ">
            {bids?.data?.length} {bids.length > 1 ? "Bids" : "bid"}
          </span>
        </div>
        <div>
          <div>
            {/* dropdown - btn */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="mx-auto flex w-72 items-center justify-between rounded-xl bg-white px-6 py-2 border"
            >
              <h1 className="font-medium text-gray-600">{selectedValue}</h1>
              <svg
                className={`${
                  isOpen ? "-rotate-180" : "rotate-0"
                } duration-300`}
                width={25}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            {/* dropdown - options  */}
            <div
              className={`${
                isOpen
                  ? "absolute top-0 opacity-100"
                  : "hidden -top-4 opacity-0"
              } absolute top-32 shadow-3xl shadow-black backdrop-blur-xl mx-auto my-4 w-72 rounded-xl py-4 border transition duration-300`}
            >
              {options?.map((option, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    setSelectedValue(e.target.textContent);
                    setIsOpen(false);
                    // handleFilter(option);
                  }}
                  className="px-6 py-2 text-white hover:bg-gray-100 hover:text-black"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-400  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-800 bg-black">
                <thead className="bg-zinc-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500"
                    >
                      Category
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500"
                    >
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 ">
                  {bids?.data?.map((bid) => (
                    <tr key={bid._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {bid.title}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {bid.deadline}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${bid.min_price} - ${bid.max_price}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className={`px-3 py-1 rounded-full text-black
                             text-xs font-bold ${
                               bid.category === "On Site" &&
                               "bg-zinc-900 text-white/70"
                             } ${
                              bid.category === "Remote" &&
                              "bg-slate-300/50 text-black/70"
                            } ${
                              bid.category === "Part Time" &&
                              "bg-white/60 text-black/70"
                            } ${
                              bid.category === "Hybrid" &&
                              "bg-slate-700 text-white/70"
                            }`}
                          >
                            {bid.category}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-black/90 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-gray-300 text-black/90">
                          <span className="h-1.5 w-1.5 rounded-full bg-gray-800"></span>
                          <h2 className="text-sm font-normal ">Pending</h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button
                          title="Mark Complete"
                          className="text-gray-500 transition-colors duration-200   hover:text-white focus:outline-none disabled:cursor-not-allowed"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10 text-white">
          <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
            <button className="text-xl box-border border-4 border-zinc-500 w-80 h-14 rounded-lg bg-black/10 relative group text-white">
              <span className="pr-8 text-white z-10">
                {({ loading }) =>
                  loading ? "Loading document..." : "Download Summary"
                }
              </span>
              <span className="bg-zinc-900 absolute right-0 top-0 h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300 z-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 inline mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="text-white w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                Download Summary
              </span>
            </button>
          </PDFDownloadLink>
        </div>
      </div>
    </section>
  );
};

export default AppliedJobs;
