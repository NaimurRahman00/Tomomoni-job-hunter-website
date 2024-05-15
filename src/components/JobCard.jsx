/* eslint-disable react/prop-types */

import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="w-full flex flex-col justify-between h-96 max-w-sm p-2.5 bg-zinc-800 text-white rounded-2xl border-black/70 border-2 shadow-md hover:shadow-xl hover:shadow-black/80 transition-all">
      <div className="flex flex-col justify-between h-64 bg-black/40 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <h4 className="border border-white/70 rounded-3xl px-3 py-1 text-white/90">
            {job.postDate}
          </h4>
          <h4 className="bg-white/50 rounded-full p-2 text-black/90 cursor-pointer">
            <FaRegBookmark />
          </h4>
        </div>
        <div>
          <h2 className="text-3xl font-lato font-light mb-2">{job.title}</h2>
          <h1 className="text-sm">Buyer: {job?.buyer?.name}</h1>
          <div className="mt-6 flex justify-between items-end">
            <h3>Deadline: <br /> {new Date(job.applyDeadline).toLocaleDateString()}</h3>
            <h2 className="bg-white/50 rounded-3xl px-3 py-1 text-black/90">Proposals: {job.job_applicant_number}</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end pb-4 px-2">
        <div>
          <h1>Salary range:</h1>
          <h2>${job.min_price} - ${job.max_price}</h2>
        </div>
        <Link to={`/job-details/${job._id}`}>
          <button className="px-4 py-1 bg-white/70 text-black/90 font-bold mt-4 rounded-full cursor-pointer">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
