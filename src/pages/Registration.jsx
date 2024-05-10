import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="max-w-[1540px] mx-auto">
      <div className="flex w-full h-[100vh] max-w-sm mx-auto overflow-hidden rounded-lg lg:max-w-full">
        <div
          className="hidden bg-cover bg-left bg-no-repeat lg:block lg:w-7/12"
          style={{
            backgroundImage: `url('https://i.ibb.co/qLS5Hx3/login-1-1.jpg')`,
          }}
        ></div>
        <div className="w-full px-6 py-8 md:px-20 lg:w-5/12 flex flex-col justify-end">
          <p className="mt-3 mb-4 text-3xl font-bold text-white font-lato">
            Sign Up
          </p>
          <form>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Name
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="name"
                name="name"
                className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-md    focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-md    focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Photo Url
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="photo"
                name="photo"
                className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-md    focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="text"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-3 text-white/90 bg-transparent border rounded-md    focus:border-white/50 focus:ring-opacity-40  focus:outline-none"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black/50 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                or login with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
          </form>

          <div className="flex items-center justify-between mt-14">
            <span className="text-sm text-white/90">
              Already have an account?{" "}
              <Link to="/login" className="hover:underline">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
