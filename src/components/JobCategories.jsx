import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const JobCategories = () => {
  return (
    <div className="container px-20 mx-auto">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3"></div>
        <div className="col-span-9">
            <h1 className="text-white text-3xl font-bold mb-6">Recommended jobs</h1>
          <Tabs>
            <TabList className="text-white/90">
              <Tab>Web development</Tab>
              <Tab>Digital marketing</Tab>
              <Tab>Graphics designer</Tab>
              <Tab>UI/UX designer</Tab>
            </TabList>
            <div className="my-8">
            <TabPanel>
              <JobCard></JobCard>
            </TabPanel>              
            <TabPanel>
              <JobCard></JobCard>
            </TabPanel>              
            <TabPanel>
              <JobCard></JobCard>
            </TabPanel>              
            <TabPanel>
              <JobCard></JobCard>
            </TabPanel>              
            </div>


          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
