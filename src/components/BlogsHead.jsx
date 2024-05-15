const BlogsHead = () => {
  return (
    <section className="bg-white dark:bg-transparent grayscale">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src="https://i.ibb.co/7JQRR5C/BPJjA.png"
              alt="Image nai"
            />

            <div>
              <p className="mt-6 text-sm text-blue-500 uppercase">
                Want to know
              </p>

              <h1 className="mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                What is an access token and refresh token? How do they work and
                where should we store them on the client side?
              </h1>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    Naimur
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Front-End Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-blue-500 capitalize">Express js</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                What is express js?
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Nest JS</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                What is Nest JS
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Database</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Want to know more about MongoDB?
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Popular library</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                React Js is the popular Open source library of JavaScript.
              </a>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1 className=" text-2xl md:text-6xl font-lato font-semibold text-white/50 mb-5">
            What is a Access token & refresh token?
          </h1>
          <p className="text-zinc-400">
            A refresh token is a special kind of token that is used to generate
            a new access token. It's like a spare key that lets users obtain a
            new key (access token) once the old one expires, without the users
            needing to re-authenticate. These tokens are crucial for long-term
            authentication and provide a seamless user experience, particularly
            in mobile and web applications where users expect to remain logged
            in across sessions.
          </p>
          <p className="text-zinc-400 mt-8">
            A refresh token typically looks like a random string, similar in
            appearance to an access token, but it is used exclusively for
            obtaining new access tokens. Here is an example of what a refresh
            token might look like:
          </p>
          <p className="overflow-scroll text-black bg-white/70 mt-8 mx-auto">
            eyJhbGciOiJSUzI1NiIsImtpZCI6IlAyU0FjMk91NGw5ZDVHbHBZV3lVWlJZdE5ITTYiLCJ0eXAiOiJKV1QifQ.eyJhbXIiOlsic21zIl0sImRybiI6IkRTUiIsImV4cCI6MTcwMjA2MTE3NiwiaWF0IjoxNjk5NjQxOTc2LCJpc3MiOiJQMlNBYzJPdTRsOWQ1R2xwWVd5VVpSWXROSE02Iiwic3ViIjoiVTJWaXNjT0paM0xrQ1RxNHZtd3FQYklIUm1DeSJ9.cCyklhGh9ACvYvkpy94a4dncodr0ApWma-UNbWoeS-7VuZyf1s1d5Zyjn_nDWaLBko3LouRue9Q-J1sM6MiznJSup1cgJ9ygXUAOckCbM-iT8eQCEucrc33JeCrVurcluX6g3e9VYdgxPw8iEoRbZMCgPOIEzbQheFwcyRxHcl-OkQw2A88hwQHElwIl-5RK4tG5aS94r-k10tPKIR02G0TmUWEirqGD0GqM28o_Shl2VnUwDW5nSEKSgxA7zHmqHLg2WKUOGPkbyg120gFF0KxCh-NgR-kE0yIgveyPGjpXIneFGKf5zOXVnDDc8hwKxW9nQGV4GlgQmmSn1DLTRA
          </p>
          <p className="text-zinc-400 mt-8">
            This string is a JSON Web Token (JWT) that contains encoded JSON
            objects with data about the refresh token. The actual structure and
            information in the token can vary depending on the authorization
            server's implementation. However, they typically contain information
            such as the user ID, the type of token (indicating it's a refresh
            token), and the issuance and expiry timestamps.
          </p>
          <h1 className=" text-2xl md:text-5xl font-lato font-semibold text-white/50 mb-5 mt-8">
            The relationship between access tokens and refresh tokens
          </h1>
          <p className="text-zinc-400 mt-8">
            While access tokens are the actual "keys" to accessing resources,
            refresh tokens are the "renewal mechanism" for these keys. They work
            hand in hand to streamline the user's experience by reducing the
            need for repeated logins while maintaining a high level of security.
          </p>
          <h1 className=" text-2xl md:text-5xl font-lato font-semibold text-white/50 mb-5 mt-8">
            How does a refresh token work?
          </h1>
          <p className="text-zinc-400 mt-8">
            Access and refresh tokens are usually used in the context of OAuth
            2.0 and OpenID Connect. Here’s a simplified flow of how a refresh
            token works:
          </p>
          <ol className="text-zinc-400 mt-8">
            <li>
              1. <b>Initial login:</b> The user logs in through a client
              application, which authenticates the credentials against an
              authentication server.
            </li>
            <li>
              2. <b>Token issuance:</b> Once authenticated, the server issues
              both an access token and a refresh token to the client.
            </li>
            <li>
              3. <b>Access token use:</b> The access token is used for accessing
              protected resources until it expires.
            </li>
            <li>
              4. <b>Access token expiry:</b> Upon expiration, the client will
              use the refresh token to obtain a new access token.
            </li>
            <li>
              5. <b>New token grant:</b> The authorization server validates the
              refresh token and issues a new access token (and possibly a new
              refresh token).
            </li>
          </ol>
          <h1 className=" text-2xl md:text-5xl font-lato font-semibold text-white/50 mt-8">
            Conclusion
          </h1>
          <p className="text-zinc-400 mt-8">
            Refresh tokens play an indispensable role in modern authentication
            processes by ensuring that user sessions can be maintained securely
            and efficiently. By understanding and implementing these tokens in
            your security architecture, you can enhance both the security and
            the user experience of your applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogsHead;
