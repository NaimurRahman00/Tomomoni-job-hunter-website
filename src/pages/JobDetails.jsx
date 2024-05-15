import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import React from "react";
import Modal from "react-modal";
import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
// import { useMutation } from "@tanstack/react-query";

const JobDetails = () => {
  // const jobData = useLoaderData();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Getting data using TanStack queries
  const { data: jobData = [], isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getData(id),
  });

  // getting all jobs data using axios
  const getData = async (id) => {
    return await axios(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
  };

  // todays date picker
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();
  const todaysDate = `${mm}-${dd}-${yyyy}`;

  console.log(jobData.applyDeadline);

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const resume = form.resume.value;
    const jobId = jobData._id;
    const category = jobData.category;
    const title = jobData.title;
    const min_price = jobData.min_price;
    const max_price = jobData.max_price;
    const totalBid = parseInt(jobData.job_applicant_number) + 1;
    const deadline = new Date(jobData.applyDeadline).toLocaleDateString();
    console.log(deadline);
    const buyerEmail = jobData?.buyer?.email || "buyer@gmail.com";

    const bidData = {
      name,
      title,
      min_price,
      max_price,
      email,
      resume,
      jobId,
      totalBid,
      deadline,
      todaysDate,
      buyerEmail,
      category,
    };

    if (email === buyerEmail)
      return toast.error("You can't apply your job post!");

    try {
      // apply jobs
      await axios.post(`${import.meta.env.VITE_API_URL}/bid`, bidData);

      // update total bid
      await axios.patch(`${import.meta.env.VITE_API_URL}/jobs/${jobData._id}`, {
        totalBid,
      });

      // navigate
      navigate("/applied-jobs");

      setIsOpen(false);
      toast.success("Application submit successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Modal
  const customStyles = {
    content: {
      top: "50%",
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

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (isLoading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-white/90"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-20">
      <div>
        <div className="h-96 my-8 mt-20">
          <div className="w-full flex flex-col justify-between p-2.5 bg-gradient-to-tr from-slate-900/10 to-gray-700/50 text-white rounded-2xl border-black/70 border-2 shadow-md">
            <div className="flex flex-col w-full justify-between bg-black/40 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <h4 className="border border-white/70 rounded-3xl px-3 py-1 text-white/90">
                  {jobData?.data?.postDate}
                </h4>
                <h4 className="bg-white/50 rounded-full p-2 text-black/90 cursor-pointer">
                  <FaRegBookmark />
                </h4>
              </div>
              <div className="relative flex flex-col-reverse md:flex-row justify-between gap-10 w-full p-8 rounded-2xl h-fit text-white/90">
                <div className="flex flex-col gap-6">
                  <h1 className="text-3xl md:text-6xl mt-6">
                    {jobData?.data?.title}
                  </h1>
                  <p className="text-sm md:text-base">
                    We are looking for a skilled {jobData?.data?.title}er to
                    create a responsive web page that closely replicates an
                    existing event listing platform, with the addition of a
                    simple form. This form will require basic validation checks
                    before submission, such as email verification and mandatory
                    field completion. Upon successful submission, the form
                    should redirect users to a thank you page that maintains a
                    consistent layout with the main site.
                  </p>
                  <div>
                    <h1>
                      <span className="text-xl font-bold text-white/70">
                        Salary range:
                      </span>{" "}
                      ${jobData?.data?.min_price} - ${jobData?.data?.max_price}
                    </h1>
                  </div>
                  <h3>
                    Deadline:{" "}
                    {new Date(
                      jobData?.data?.applyDeadline
                    ).toLocaleDateString()}
                  </h3>

                </div>
                <div className="w-full bg-black/30 backdrop-blur-md rounded-xl overflow-hidden shadow shadow-black">
                  <img
                    src={
                      jobData?.data?.bannerUrl ||
                      "https://i.ibb.co/sQxR4qR/login-2-1.jpg"
                    }
                    alt="nai"
                    className="w-fit"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end pb-2 px-2">
              <div className="flex justify-between items-end">
                <h2 className="bg-white/50 rounded-3xl px-3 py-1 text-black/90">
                  Number of applicants: {jobData?.data?.job_applicant_number}
                </h2>
              </div>
              <button
                onClick={openModal}
                className="px-4 py-1 bg-white/70 text-xl text-black/90 font-bold mt-4 rounded-full cursor-pointer hover:bg-white/50"
              >
                Apply now
              </button>
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
        <form onSubmit={handleFormSubmission}>
          <div className="grid grid-cols-1 p-4 rounded-lg gap-6 sm:grid-cols-2 py-10">
            <div>
              <label className="text-white/80 " htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                defaultValue={user?.displayName}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white/90 border border-gray-200 rounded-md  focus:border-black focus:ring-black focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white/80 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white/90 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-black focus:ring-black focus:ring-opacity-40 "
              />
            </div>

            <div className="col-span-2">
              <label className="text-white/80" htmlFor="resume">
                Provide your resume link here
              </label>
              <input
                id="resume"
                name="resume"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white/90 border border-gray-200 rounded-md   focus:border-black focus:ring-black focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit application
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default JobDetails;
