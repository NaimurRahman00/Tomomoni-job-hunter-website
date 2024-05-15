import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

const JobCategories = () => {
  // getting data using axios

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
  //     setJobs(data);
  //   };
  //   getData();
  // }, []);

  // Getting data using TanStack queries
  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getData(),
  });
  console.log(jobs.data)

  // getting all jobs data using axios
  const getData = async () => {
    return await axios(`${import.meta.env.VITE_API_URL}/jobs`);
  };

  if (isLoading)
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-white/90"></div>
      </div>
    );

  return (
    <div className="container px-20 mx-auto">
      <div className="grid grid-cols-12 gap-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="col-span-3 rounded-lg bg-slate-100/10"
        ></motion.div>
        <div className="col-span-9">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 40 },
              opacity: { duration: 2 },
              ease: "easeIn",
              duration: 2,
            }}
            className="flex items-center gap-4 mb-8"
          >
            <h1 className="text-white text-3xl font-bold">Recommended jobs</h1>
            <h2 className="border border-white px-3 h-fit text-white/90 w-fit rounded-full">
              {jobs.data?.length}
            </h2>
          </motion.div>
          <Tabs>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 2 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <TabList className="text-white/90 space-x-8 text-lg font-semibold">
                <Tab>On Site</Tab>
                <Tab>Remote</Tab>
                <Tab>Part Time</Tab>
                <Tab>Hybrid</Tab>
                <Tab>All Jobs</Tab>
              </TabList>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 2 },
                ease: "easeIn",
                duration: 0.5,
              }}
              className="mt-8"
            >
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.data
                    ?.filter((web) => web.category === "On Site")
                    .map((job) => (
                      <JobCard key={job._id} job={job}></JobCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.data
                    ?.filter((web) => web.category === "Remote")
                    .map((job) => (
                      <JobCard key={job._id} job={job}></JobCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.data
                    ?.filter((web) => web.category === "Part Time")
                    .map((job) => (
                      <JobCard key={job._id} job={job}></JobCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.data
                    ?.filter((web) => web.category === "Hybrid")
                    .map((job) => (
                      <JobCard key={job._id} job={job}></JobCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.data?.map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                  ))}
                </div>
              </TabPanel>
            </motion.div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
