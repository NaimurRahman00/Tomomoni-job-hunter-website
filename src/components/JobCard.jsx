/* eslint-disable react/prop-types */

const JobCard = () => {
  return (
    <div className='w-full h-96 max-w-sm px-4 py-3 bg-slate-500/10 text-white rounded-2xl shadow-md hover:scale-[1.02] transition-all'>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light'>
          Deadline: 20/12/2024
        </span>
        <span className='px-3 py-1 text-[8px] uppercase bg-blue-200 rounded-full '>
          Web Development
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold '>
          Build Dynamic Website Using React
        </h1>

        <p className='mt-2 text-sm '>
          Lorem ipsum dolor sit adipisicing elit...
        </p>
        <p className='mt-2 text-sm font-bold'>
          Range: $100 - $150
        </p>
      </div>
    </div>
  )
}

export default JobCard
