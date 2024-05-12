import { useContext } from "react";
import { SiManjaro } from "react-icons/si";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="top-0 left-0 right-0 fixed z-10">
      <div className="navbar backdrop-blur-sm shadow-sm container px-4 lg:px-20 mx-auto text-white">
        <div className="flex-1">
          <div className="flex gap-2 items-center text-white text-2xl">
            <SiManjaro />
            <span className="font-bold font-briem">TomoMoni</span>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-4 mr-10">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/erro">All Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/add-job">Add Job</NavLink>
            </li>
            <li>
              <NavLink to="/">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {!user && (
              <li>
                <Link to="/login" className="btn bg-none">
                  Login
                </Link>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full" title={user?.displayName}>
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                    className="grayscale "
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link to='/applied-jobs'>Applied Jobs</Link>
                </li>
                <li>
                  <Link to='/my-posted-job'>My Posted Jobs</Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
