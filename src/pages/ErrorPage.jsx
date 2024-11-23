import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <section className='bg-black/5'>
      <div className=' container px-20 mx-auto min-h-screen py-12 lg:flex lg:items-center lg:gap-12'>
        <div className='wf-ull lg:w-1/2'>
          <p className='text-6xl font-bold text-black'>404 error</p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-black md:text-3xl'>
            Page not found - Please, refresh when Home button is not working.
          </h1>
          <p className='mt-6 text-3xl text-zinc-900 dark:text-gray-400'>
            Sorry, the page you are looking for doesnt exist.Here are some
            helpful links:
          </p>

          <div className='flex items-center mt-6 gap-x-3'>
            <Link to="/" className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-black/80 rounded-lg shrink-0 sm:w-auto hover:bg-black'>
              Take me home
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img className="h-full" src="https://i.ibb.co/k9HKnx5/404.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
