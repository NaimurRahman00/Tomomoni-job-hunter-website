import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const JobDetails = () => {
  const jobData = useLoaderData();
  const { user } = useContext(AuthContext);

  // const handleFormSubmission = async e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const jobId = jobData._id;
  //   const price = parseFloat(form.price.value)
  // }

  return (
    <div className="container mx-auto p-20">
      <div>
        <div className="relative w-full p-8 bg-gradient-to-tr from-slate-900/10 to-gray-700/50 rounded-2xl h-60 text-white/90">
          {/* <div className="absolute h-40 w-40 bg-black/30 backdrop-blur-md rounded-full -bottom-1/4 left-20"></div> */}
          <div>
            <h1 className="text-6xl mb-6">{jobData.job_title}</h1>
            <p>
              We are looking for a skilled {jobData.job_title}er to create a
              responsive web page that closely replicates an existing event
              listing platform, with the addition of a simple form. This form
              will require basic validation checks before submission, such as
              email verification and mandatory field completion. Upon successful
              submission, the form should redirect users to a thank you page
              that maintains a consistent layout with the main site.
            </p>
          </div>
        </div>
        <div className="h-96 my-8">
          <div className="w-full flex flex-col justify-between h-60 p-2.5 bg-zinc-800 text-white rounded-2xl border-black/70 border-2 shadow-md">
            <div className="flex flex-col w-full justify-between h-40 bg-black/40 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <h4 className="border border-white/70 rounded-3xl px-3 py-1 text-white/90">
                  {jobData.job_posting_date}
                </h4>
                <h4 className="bg-white/50 rounded-full p-2 text-black/90 cursor-pointer">
                  <FaRegBookmark />
                </h4>
              </div>
              <div>
                <h3>Deadline: {jobData.application_deadline}</h3>
                <div className="flex justify-between items-end">
                  <h1 className="text-3xl mt-4 font-semibold ">
                    {jobData.name}
                  </h1>
                  <h2 className="bg-white/50 rounded-3xl px-3 py-1 text-black/90">
                    Number of applicants: {jobData.job_applicants_number}
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end pb-2 px-2">
              <div>
                <h1>Salary range: {jobData.salary_range}</h1>
              </div>
              <button className="px-4 py-1 bg-white/70 text-xl text-black/90 font-bold mt-4 rounded-full cursor-pointer">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container mx-auto px-20 py-24 h-96">
    //   <div className="grid grid-cols-12 grid-rows-6 gap-5">
    //     <div className="col-span-3 row-span-4 h-96">
    //       <div className="w-full flex flex-col justify-between h-96 max-w-sm p-2.5 bg-zinc-800 text-white rounded-2xl border-black/70 border-2 shadow-md">
    //         <div className="flex flex-col justify-between h-64 bg-black/40 rounded-xl p-4">
    //           <div className="flex justify-between items-center">
    //             <h4 className="border border-white/70 rounded-3xl px-3 py-1 text-white/90">
    //               {jobData.job_posting_date}
    //             </h4>
    //             <h4 className="bg-white/50 rounded-full p-2 text-black/90 cursor-pointer">
    //               <FaRegBookmark />
    //             </h4>
    //           </div>
    //           <div>
    //             <h1 className="text-sm mb-2 font-semibold ">{jobData.name}</h1>
    //             <h2 className="text-3xl font-lato font-light">
    //               {jobData.job_title}
    //             </h2>
    //             <div className="mt-6 flex justify-between items-end">
    //               <h3>
    //                 Deadline: <br /> {jobData.application_deadline}
    //               </h3>
    //               <h2 className="bg-white/50 rounded-3xl px-3 py-1 text-black/90">
    //                 Proposals: {jobData.jobData_applicants_number}
    //               </h2>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex justify-between items-end pb-4 px-2">
    //           <div>
    //             <h1>Salary range:</h1>
    //             <h2>{jobData.salary_range}</h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-span-9 row-span-2 bg-black"></div>
    //     <div className="col-span-3 row-span-2 bg-black"></div>
    //     <div className="col-span-6 row-span-4 bg-zinc-800 border-black/70 border-2 rounded-2xl p-6">
    //       <form onSubmit={handleFormSubmission}>
    //         <div className="grid grid-cols-1 p-4 rounded-lg gap-6 sm:grid-cols-2 bg-black/40 py-10">
    //           <div>
    //             <label className="text-white/80 " htmlFor="price">
    //               Price
    //             </label>
    //             <input
    //               id="price"
    //               type="number"
    //               name="price"
    //               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
    //             />
    //           </div>

    //           <div>
    //             <label className="text-gray-700 " htmlFor="emailAddress">
    //               Email Address
    //             </label>
    //             <input
    //               id="emailAddress"
    //               type="email"
    //               name="email"
    //               defaultValue={user?.email}
    //               disabled
    //               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
    //             />
    //           </div>

    //           <div>
    //             <label className="text-gray-700 " htmlFor="comment">
    //               Comment
    //             </label>
    //             <input
    //               id="comment"
    //               name="comment"
    //               type="text"
    //               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
    //             />
    //           </div>
    //           <div className="flex flex-col gap-2 ">
    //             <label className="text-gray-700">Deadline</label>

    //             {/* Date Picker Input Field */}
    //           </div>
    //         </div>

    //         <div className="flex justify-end mt-6">
    //           <button
    //             type="submit"
    //             className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
    //           >
    //             Place Bid
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="col-span-6 row-span-2 bg-black"></div>
    //   </div>
    // </div>
  );
};

export default JobDetails;
