import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import React from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  // date picker
  const [deadline, setDeadline] = useState(new Date());

  // dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Job Category");
  // array of options
  const options = ["On Site", "Remote", "Part Time", "Hybrid"];

  // getting data using axios
  const [jobs, setJobs] = useState([]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/${user?.email}`
    );
    setJobs(data);
  };

  useEffect(() => {
    getData();
  }, [user]);

  // Delete a data
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
      toast.success("Delete successful!");
      getData();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  // update Modal
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "black",
      opacity: ".9",
    },
  };

  Modal.setAppElement("#root");

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  // Delete confirmation modal
  const [openDeleteModal, setOpenModal] = useState(false);

  return (
    <section className="container p-20 pt-24 mx-auto">
      <div className="flex items-center gap-x-3 w-5/6 mx-auto">
        <h2 className="text-2xl font-medium text-white/90 font-lato">
          My Posted Jobs
        </h2>

        <span className="px-3 py-1 text-sm text-black font-bold bg-blue-100 rounded-full ">
          {jobs.length} Jobs
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden w-5/6 mx-auto border border-gray-500 md:rounded-lg bg-zinc-800">
              <table className="min-w-full divide-y divide-gray-200/50 bg-zinc-800">
                <thead className="bg-black/50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-white/80"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Job Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-white/80"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-white/80"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price Range</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-white/80"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-white/80"
                    >
                      Job Applicant
                    </th>

                    <th className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-white/80">
                      Update/Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-zinc-800 divide-y divide-gray-200/10 ">
                  {jobs.map((job) => (
                    <tr key={job._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {job.title}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {new Date(job.applyDeadline).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${job.min_price} - ${job.max_price}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className={`px-3 py-1 rounded-full text-black
                             text-xs font-bold ${
                               job.category === "On Site" &&
                               "bg-black text-white/70"
                             } ${
                              job.category === "Remote" &&
                              "bg-white/30 text-black/70"
                            } ${
                              job.category === "Part Time" &&
                              "bg-white/60 text-black/70"
                            } ${
                              job.category === "Hybrid" &&
                              "bg-black/30 text-white/70"
                            }`}
                          >
                            {job.category}
                          </p>
                        </div>
                      </td>
                      <td
                        title=""
                        className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                      >
                        {job.job_applicant_number}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={openModal}
                            className="text-gray-300 transition-colors duration-200   hover:text-black hover:bg-white focus:outline-none border border-white/20 px-2 py-1 rounded-lg"
                          >
                            Update
                          </button>

                          <button
                            onClick={() => setOpenModal(true)}
                            className="text-gray-500 transition-colors duration-200   hover:text-white focus:outline-none text-2xl"
                          >
                            <MdDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* React modal */}
      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="font-semibold py-1 px-3 bg-white/90 rounded-lg hover:bg-white/50 hover:text-white"
          onClick={closeModal}
        >
          close
        </button>
        <form className="w-3/4 mx-auto py-8 grid grid-col-6 gap-4">
          {/* Job banner url */}
          <div className="mt-2 col-span-6">
            <input
              id="url"
              placeholder="Job banner Url"
              autoComplete=".com"
              name="url"
              className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-xl   focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
              type="text"
            />
          </div>
          {/* Title */}
          <div className="col-span-6">
            <input
              id="title"
              name="title"
              className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-xl    focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
              type="text"
              placeholder="Job title"
            />
          </div>
          {/* Category */}
          <div className="relative col-span-6">
            {/* dropdown - btn */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="mx-auto flex justify-between w-full items-center rounded-xl bg-white px-6 py-3 border"
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
                  ? "absolute top-10 left-0 shadow-2xl transition shadow-black"
                  : "hidden -top-4"
              } absolute mx-auto backdrop-blur-2xl z-20 my-4 w-72 rounded-xl py-4 border duration-300`}
            >
              {options?.map((option, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    setSelectedValue(e.target.textContent);
                    setIsOpen(false);
                  }}
                  className="px-6 py-2 text-white hover:bg-gray-100"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          {/* Salary range */}
          {/* min price */}
          <div className="col-span-3">
            <input
              id="min_price"
              name="min_price"
              className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-xl    focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
              type="number"
              placeholder="Minimum price"
            />
          </div>
          {/* max price */}
          <div className="col-span-3">
            <input
              id="max_price"
              name="max_price"
              className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-xl   focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
              type="number"
              placeholder="Maximum price"
            />
          </div>
          {/* date picker */}
          <div className="w-full col-span-6 flex justify-end flex-col">
            <h2 className="text-white/90 font-bold">Create Deadline:</h2>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              className="w-full mt-2 col-span-1 block px-4 py-3 text-black/90 bg-white border rounded-xl focus:border-white/50 focus:ring-opacity-40 focus:outline-none"
            />
          </div>
          {/* description */}
          <div className="col-span-6">
            <textarea
              id="description"
              placeholder="Job description"
              name="description"
              className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-xl   focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
              type="text"
            />
          </div>

          {/* Add button */}
          <div className="col-span-6">
            <button
              type="submit"
              className="w-full px-6 py-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700/50 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Update
            </button>
          </div>
        </form>
      </Modal>
      {/* Delete confirmation modal */}
      {jobs.map((job) => (
        <div
          key={job._id}
          onClick={() => setOpenModal(false)}
          className={`fixed z-[100] flex items-center justify-center ${
            openDeleteModal ? "opacity-1 visible" : "invisible opacity-0"
          } inset-0 duration-100 bg-black/10`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
              openDeleteModal
                ? "opacity-1 translate-y-0 duration-100"
                : "translate-y-20 opacity-0 duration-100"
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg
                className="w-16 stroke-white/20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path
                    opacity="0.4"
                    d="M12 7.75V13"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    opacity="0.4"
                    d="M12 16.2002V16.3002"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              <h6 className="text-center text-sm font-medium opacity-70">
                Are you sure, want to delete this item?
              </h6>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleDelete(job._id);
                    setOpenModal(false);
                  }}
                  className="rounded-md bg-black/40 px-6 py-2 text-sm text-white hover:bg-black/80"
                >
                  Delete
                </button>
                <button
                  onClick={() => setOpenModal(false)}
                  className="rounded-md border border-black px-6 py-2 text-sm text-white hover:bg-black/80"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyPostedJobs;
