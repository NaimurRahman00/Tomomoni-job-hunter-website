
const BlogFooter = () => {
    return (
        <section className="bg-white dark:bg-transparent grayscale">
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent posts </h1>

            <button className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700"/>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://media.licdn.com/dms/image/D4D12AQF1btzrvx64aQ/article-cover_image-shrink_720_1280/0/1698242399109?e=2147483647&v=beta&t=_OkJ8ffsiTF8-_AxICCpZXT176KkvOziJb0uKDDk3r0" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Node Js</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        What do you want to know about Node Js
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript...
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Mahfuz khan
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">May 1, 2024</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://miro.medium.com/v2/resize:fit:1358/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Nest Js</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        All the features you want to know</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    In the world of server-side JavaScript development, Node.js has redefined how web applications are built. It’s known for its scalability, speed, and flexibility. But to harness the true...
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Tasfiqur Rahman
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 6, 2024</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">React Js</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        All about popular open source library..
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers...
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Ayesha Jui
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default BlogFooter;