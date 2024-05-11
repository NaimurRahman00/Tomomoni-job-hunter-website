import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Job Category");
  // array of options
  const options = ["On Site", "Remote", "Part Time", "Hybrid"];
  // date picker
  const [deadline, setDeadline] = useState(new Date());
  // todays date picker
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();
  const todaysDate = `${mm}-${dd}-${yyyy}`;

  // Post job
  const handleJobPostFrom = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bannerUrl = form.url.value;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const category = selectedValue;
    const min_price = form.min_price.value;
    const max_price = form.max_price.value;
    const job_applicant_number = form.job_applicant_number.value;
    const applyDeadline = deadline;
    const postDate = todaysDate;
    const description = form.description.value;

    const postJobData = {
      bannerUrl,
      title,
      category,
      min_price,
      max_price,
      job_applicant_number,
      applyDeadline,
      postDate,
      description,
      buyer: {
        name,
        email,
        photo: user?.photoURL,
      },
    };

    console.log(postJobData);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/job`,
        postJobData
      );
      navigate('/my-posted-job')
      toast.success("Job posted successfully!");
    } catch (err) {
      toast.error(err.message)
    }
  };

  return (
    <div className="bg-zinc-800/70">
      <div className="grid grid-cols-6 container mx-auto">
        <div className="col-span-2 h-full py-32 ps-20">
          <h1 className="text-8xl text-white/90 font-bold font-briem">
            Want to hire?
          </h1>
          <h2 className="text-5xl mt-6 text-white/60 font-lato">
            Fill the form for post your job...
          </h2>
        </div>
        {/* form */}
        <div className="col-span-4 bg-black/10 p-14 w-full">
          <form
            onSubmit={handleJobPostFrom}
            className="w-3/4 mx-auto py-8 grid grid-col-6 gap-4"
          >
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
            {/* Name */}
            <div className="mt-2 col-span-4">
              <input
                id="name"
                name="name"
                defaultValue={user?.displayName}
                disabled
                className="block w-full px-4 py-3 text-white/90 bg-white/10 border rounded-xl   focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="text"
              />
            </div>
            {/* email */}
            <div className="mt-2 col-span-2">
              <input
                id="email"
                name="email"
                className="block bg-white/10 w-full px-4 py-3 text-white/90 border rounded-xl focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="email"
                defaultValue={user?.email}
                disabled
              />
            </div>
            {/* Title */}
            <div className="mt-2 col-span-2">
              <input
                id="title"
                name="title"
                className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-xl    focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="text"
                placeholder="Job title"
              />
            </div>
            {/* Category */}
            <div className="relative col-span-4 mt-2">
              {/* dropdown - btn */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="mx-auto flex justify-between w-72 items-center rounded-xl bg-white px-6 py-3 border"
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
                    ? "absolute top-10 left-10 shadow-2xl transition shadow-black"
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
            <div className="mt-2 col-span-3">
              <input
                id="min_price"
                name="min_price"
                className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-xl    focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="number"
                placeholder="Minimum price"
              />
            </div>
            {/* max price */}
            <div className="mt-2 col-span-3">
              <input
                id="max_price"
                name="max_price"
                className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-xl   focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="number"
                placeholder="Maximum price"
              />
            </div>
            {/* Job applicant number */}
            <div className="col-span-4">
              <label htmlFor="job_applicant_number" className=" text-white">
                Job applicant number
              </label>
              <input
                id="job_applicant_number"
                name="job_applicant_number"
                className="block w-full px-4 py-3 mt-2 text-white/90 bg-transparent border rounded-xl   focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="number"
                defaultValue={0}
              />
            </div>
            {/* date picker */}
            <div className="w-full col-span-2 flex justify-end flex-col">
              <h2 className="text-white/90 font-bold">Create Deadline:</h2>
              <DatePicker
                selected={deadline}
                onChange={(date) => setDeadline(date)}
                className="w-full mt-2 col-span-1 block px-4 py-3 text-black/90 bg-white border rounded-xl focus:border-white/50 focus:ring-opacity-40 focus:outline-none"
              />
            </div>
            {/* description */}
            <div className="mt-2 col-span-6">
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
                className="w-full mt-4 px-6 py-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black/50 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
