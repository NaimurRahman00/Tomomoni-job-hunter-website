import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);

  // getting my bids data using axios
  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/bid-request/${user?.email}`
    );
    setBids(data);
  };

  useEffect(() => {
    getData();
  }, [user]);

  return (
    <section className='container p-20 pt-28 mx-auto'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-3xl font-medium text-white/90 '>Bid Requests</h2>

        <span className='px-3 py-1 text-sm text-white bg-gray-700 rounded-full '>
          {bids.length} Requests
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-600  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-600'>
                <thead className='bg-zinc-800'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-white/80'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-white/80'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-white/80'
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-white/80'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-white/80'
                    >
                      Category
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-white/80'
                    >
                      Status
                    </th>

                    <th className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-white/80'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-zinc-600 divide-y divide-gray-400 '>
                  <tr>
                    <td className='px-4 py-4 text-sm text-white/90  whitespace-nowrap'>
                      Build Dynamic Website
                    </td>
                    <td className='px-4 py-4 text-sm text-white/90  whitespace-nowrap'>
                      example@gmail.com
                    </td>

                    <td className='px-4 py-4 text-sm text-white/90  whitespace-nowrap'>
                      10/04/2024
                    </td>

                    <td className='px-4 py-4 text-sm text-white/90  whitespace-nowrap'>
                      $200
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-2'>
                        <p
                          className='px-3 py-1 rounded-full text-white/90 bg-zinc-800/60
                           text-xs'
                        >
                          Web Development
                        </p>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                      <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-zinc-100/60 text-black/90'>
                        <span className='h-1.5 w-1.5 rounded-full bg-black/80'></span>
                        <h2 className='text-sm font-normal '>Pending</h2>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-6'>
                        <button className='text-white/90 transition-colors duration-200   hover:text-black focus:outline-none'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 12.75 6 6 9-13.5'
                            />
                          </svg>
                        </button>

                        <button className='text-white/90 transition-colors duration-200   hover:text-black focus:outline-none'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BidRequests
