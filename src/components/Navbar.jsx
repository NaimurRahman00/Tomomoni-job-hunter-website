import { useContext } from "react";
import { SiManjaro } from "react-icons/si";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="top-0 left-0 right-0 fixed">
      <div className="navbar backdrop-blur-sm shadow-sm container px-4 lg:px-20 mx-auto text-white">
        <div className="flex-1">
          <div className="flex gap-2 items-center text-white text-2xl">
            <SiManjaro />
            <span className="font-bold font-briem">TomoMoni</span>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
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
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <div className="justify-between">Add Job</div>
                </li>
                <li>
                  <div>My Posted Jobs</div>
                </li>
                <li>
                  <div>My Bids</div>
                </li>
                <li>
                  <div>Bid Requests</div>
                </li>
                <li className="mt-2">
                  <button onClick={logOut} className="bg-gray-200 block text-center">
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
