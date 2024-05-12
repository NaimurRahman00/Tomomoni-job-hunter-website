import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

const JobCategories = () => {
  // getting data using axios
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  }, []);

  return (
    <div className="container px-20 mx-auto">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3 rounded-lg bg-slate-100/10"></div>
        <div className="col-span-9">
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-white text-3xl font-bold">
              Recommended jobs
            </h1>
            <h2 className="border border-white px-3 h-fit py-1 text-white/90 w-fit rounded-full">
              245
            </h2>
          </div>
          <Tabs>
            <TabList className="text-white/90 space-x-8 text-lg font-semibold">
              <Tab>On Site</Tab>
              <Tab>Remote</Tab>
              <Tab>Part Time</Tab>
              <Tab>Hybrid</Tab>
            </TabList>
            <div className="mt-8">
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs
                    .filter((web) => web.category === "On Site")
                    .map((job) => (
                      <JobCard key={job._id} job={job}></JobCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs
                    .filter((web) => web.category === "Remote")
                    .map((job) => (
                      <JobCard key={job._id} job={job}></JobCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs
                    .filter((web) => web.category === "Part Time")
                    .map((job) => (
                      <JobCard key={job._id} job={job}></JobCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs
                    .filter((web) => web.category === "Hybrid")
                    .map((job) => (
                      <JobCard key={job._id} job={job}></JobCard>
                    ))}
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
