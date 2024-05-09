import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-black/90">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Outlet */}
      <Outlet></Outlet>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
