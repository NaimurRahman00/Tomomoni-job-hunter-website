import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-black/90">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Outlet */}
      <div className='min-h-[100vh]'>
      <Outlet></Outlet>

      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
