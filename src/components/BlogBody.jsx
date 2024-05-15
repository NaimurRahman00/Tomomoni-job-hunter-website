const BlogBody = () => {
  return (
    <section className="bg-white dark:bg-transparent grayscale">
      <div className="container px-6 py-10 mx-auto">

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src="https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA"
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm text-blue-500 uppercase">category</p>

            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
            >
             What is Express js
            </a>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
            </p>

            <a
              href="#"
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </a>

            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Zubaer khan
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-lato font-bold text-white/90 mt-8">About this website (Explain my code)</h1>
          <p className="mt-4 text-white/60">React-based Website: The front-end of Tomomoni is built using React.js, a popular JavaScript library for building user interfaces. React allows for the creation of interactive and dynamic components, facilitating a smooth and responsive user experience.</p>
          <p className="mt-4 text-white/60">Login/Logout System: To manage user authentication and session management, you've implemented a login/logout system. This system likely utilizes React Router for routing and authentication mechanisms such as JSON Web Tokens (JWT) for secure authentication and authorization.</p>
          <p className="mt-4 text-white/60">Tailwind CSS: Tomomoni's UI is styled using Tailwind CSS, a utility-first CSS framework that provides pre-built components and utility classes for rapid and consistent styling. Tailwind CSS enables you to create a visually appealing and modern user interface with minimal CSS code.</p>
          <p className="mt-4 text-white/60">Various npm Packages: Your project utilizes various npm packages to extend the functionality of your application. These packages could include libraries for form validation, state management (e.g., Redux), HTTP requests (e.g., Axios), and other utility functions to enhance the development process and improve overall performance.</p>
          <p className="mt-4 text-white/60">MongoDB for Database: MongoDB, a NoSQL database, serves as the backend database for Tomomoni. It offers flexibility and scalability, making it suitable for storing various types of data, including user profiles, job listings, and application data. Mongoose, a MongoDB object modeling tool for Node.js, may be used to interact with the database, define schemas, and perform CRUD operations.</p>
          <p className="mt-4 text-white/60">Express: Express.js, a web application framework for Node.js, is used to build the backend server for Tomomoni. Express simplifies the process of handling HTTP requests, routing, middleware integration, and other server-side functionalities. It serves as the foundation for building a robust and scalable RESTful API to communicate with the frontend React application.</p>
        </div>
      </div>
    </section>
  );
};

export default BlogBody;
