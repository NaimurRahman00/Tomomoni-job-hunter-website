import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);

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
                              job.category === 'On Site' && 
                              'bg-black text-white/70'
                             } ${ job.category === 'Remote' && 
                             'bg-white/30 text-black/70'
                             } ${ job.category === 'Part Time' && 
                             'bg-white/60 text-black/70'
                             } ${ job.category === 'Hybrid' && 
                             'bg-black/30 text-white/70'
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
                          <button className="text-gray-300 transition-colors duration-200   hover:text-black hover:bg-white focus:outline-none border border-white/20 px-2 py-1 rounded-lg">
                            Update
                          </button>

                          <button
                            onClick={() => {
                              handleDelete(job._id);
                            }}
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
    </section>
  );
};

export default MyPostedJobs;
