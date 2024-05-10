import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import JobCategories from "../components/JobCategories";


const Home2 = () => {
const jobs = useLoaderData()
console.log(jobs)
  return (
    <div>

        <Banner></Banner>
        <JobCategories jobs={jobs}></JobCategories>
    </div>
  );
};

export default Home2;
