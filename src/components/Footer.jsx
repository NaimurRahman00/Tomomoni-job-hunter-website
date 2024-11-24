import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { SiManjaro } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="text-base-content py-10">
      <div className="container px-12 mx-auto max-w-[1480px] footer flex flex-col sm:grid grid-cols-12 justify-stretch text-white/90">
        <aside className="col-span-3">
          <div className="scale-100 cursor-pointer rounded-2xl sm:px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
            <h2 className="text-4xl mb-3 flex gap-3 items-center text-white">
            <SiManjaro />
              <span className="font-briem">TomoMoni</span>
            </h2>
          </div>
          <p className="sm:px-2 leading-relaxed">
          Tomomoni is a versatile job search platform that aggregates on-site, remote, part-time, and hybrid job listings. Ideal for diverse job seekers!
          </p>
        </aside>
        <nav className="col-span-2 sm:ml-10">
          <h6 className="font-semibold text-lg font-unbounded uppercase">
            Jobs
          </h6>
          <div className="flex flex-col gap-4 mt-5  font-medium">
            <a className="link link-hover">My posted jobs</a>
            <a className="link link-hover">Applied jobs</a>
            <a className="link link-hover">Bid request</a>
          </div>
        </nav>
        <nav className="col-span-3">
          <h6 className=" font-semibold text-lg font-unbounded uppercase">
            Information
          </h6>
          <div className="flex flex-col gap-4 mt-5  font-medium">
            <a className="link link-hover">Blogs</a>
            <a className="link link-hover">FAQ</a>
          </div>
        </nav>
        <nav className="col-span-4 sm:ml-6 w-full">
          <div className="relative w-full border-b-2 border-gray-500 mt-4">
            <input
              className="peer focus:border-black bg-transparent py-2  focus:outline-none"
              type="text"
              id="navigate_ui_input_44"
              placeholder="Name@gmail.com"
            />
            <button className="absolute right-2 bottom-2 rounded-full bg-gray-400/90 px-6 py-2.5 text-xs font-medium text-black duration-300 active:scale-95 font-poppins">
              Signup
            </button>
          </div>
          <div className="flex gap-4 justify-start w-full mt-1 mb-3">
          <button className="rounded-full text-white font-semibold mt-5 text-2xl py-2 px-2 bg-black/90 ">
              <FaInstagram />
            </button>
            <button className="rounded-full text-white font-semibold mt-5 text-2xl py-2 px-2 bg-black/90 ">
              <FaFacebookF />
            </button>
            <button className="rounded-full text-white font-semibold mt-5 text-2xl py-2 px-2 bg-black/90 ">
              <FaPinterestP />
            </button>
          </div>
          <h6 className="text-xs">
            All right deserved @TomoMoni - 2024
          </h6>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
