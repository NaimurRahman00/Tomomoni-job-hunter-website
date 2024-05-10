import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const JobCategories = () => {
    // getting data using axios
const [jobs, setJobs] = useState([]);

useEffect(()=> {
    const getData = async ()=> {
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
        setJobs(data);
    }
    getData();
}, [])

  return (
    <div className="container px-20 mx-auto">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3"></div>
        <div className="col-span-9">
          <h1 className="text-white text-3xl font-bold mb-6">
            Recommended jobs
          </h1>
          <Tabs>
            <TabList className="text-white/90">
              <Tab>Web development</Tab>
              <Tab>Digital marketing</Tab>
              <Tab>Graphics designer</Tab>
              <Tab>UI/UX designer</Tab>
            </TabList>
            <div className="my-8">
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.filter(web => web.job_title === "web development").map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.filter(web => web.job_title === "Digital Marketing").map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.filter(web => web.job_title === "Graphics Design").map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.filter(web => web.job_title === "UI/UX Design").map((job) => (
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
