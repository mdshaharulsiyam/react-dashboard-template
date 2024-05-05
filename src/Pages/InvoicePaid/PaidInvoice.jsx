
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import './css/dropdown.css'
import { Menu } from '@headlessui/react';




const PaidInvoice = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div>
            <div className="">
                <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5">
                    <h1 className="w-full mx-auto  text-3xl dark:text-white text-black ">Paid Invoice List</h1>
                </div>
                <div className='border dark:border-black p-4'>
                    <div className='flex  flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none  mb-4 w-full'>

                        <div className='flex flex-col bg-[#DDDBFB] dark:bg-gray-600 md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-black border mb-4 w-full'>
                            <div className='flex  w-ful'>
                                <button className='btn rounded-none border-none bg-success text-white hover:bg-green-600 '>ALL(1)</button>
                                <button className='btn rounded-none border-none text-blue-600 bg-[#DDDBFB] hover:bg-green-600 hover:text-white dark:bg-base-100'>Paid(0)</button>
                                <button className='btn rounded-none border-none text-blue-600 bg-[#DDDBFB] hover:bg-green-600 hover:text-white dark:bg-base-100 dar'>Unpaid(1)</button>
                                <button className='btn rounded-none border-none text-blue-600 bg-[#DDDBFB] hover:bg-green-600 hover:text-white dark:bg-base-100 dar'>Pending(1)</button>
                            </div>
                            <Link to="/createInvoice"> <button className='btn rounded-none bg-success text-white border-none hover:bg-green-600 text-lg'>Create Invoice</button></Link>

                        </div>

                    </div>

                    <div className="overflow-x-auto">
                        <table className="table border dark:border-black">
                            {/* head */}
                            <thead >
                                <tr className='uppercase text-center font-bold text-black bg-[#DDDBFB] dark:bg-gray-600 dark:border-black text-lg dark:text-white'>
                                    <th className=' '>Invoice Id</th>
                                    <th className='border dark:border-black'>Client name</th>
                                    <th className=' '>Payment method</th>
                                    <th className=' '>Billing creation</th>
                                    <th className=' '>Status</th>
                                    <th className=' '>Action</th>
                                </tr>
                            </thead>
                            <tbody className=' text-center'>
                                {/* row 1 */}


                                <tr>
                                    <th
                                        className={`px-6 pt-2 font-medium whitespace-nowrap text-center group pb-8 text-lg border dark:border-black text-black dark:text-white `}
                                    >
                                        Beauty
                                        {/* <div className="absolute text-center  opacity-0 group-hover:opacity-100 flex items-center ">

                                            <h1 className="text-base font-bold text-blue-600 text-center">
                                                Edit <span className='text-black'>|</span> <span className='text-yellow-400'>Inactive</span>
                                            </h1>


                                        </div> */}
                                    </th>
                                    <td className='border dark:border-black'>
                                        <h1 className=' text-blue-500 text-base'>Shuvo</h1>
                                    </td>
                                    <td className='border dark:border-black'>
                                        <h1 className=' text-blue-500 text-base'>Cash</h1>
                                    </td>
                                    <td className='border dark:border-black'>
                                        <div>
                                            <span className=' text-black text-base'><span className='font-bold text-lg text-black dark:text-white '>Date :</span> 16-03-2024</span>
                                            <br />
                                            <span className='text-black text-base'><span className='font-bold text-black dark:text-white text-base'> Time : </span>11:52</span>

                                        </div>

                                    </td>


                                    <td className='border dark:border-black text-base'>
                                        <button className='rounded-md bg-warning border-none text-white py-0 px-2 '>Unpaid</button>
                                    </td>
                                    <td className='border dark:border-black text-base overflow-hidden'>
                                        <div className="relative">
                                            <button onClick={() => setShowDropdown(!showDropdown)}>Click</button>
                                            {showDropdown && (
                                                <ul className="absolute top-full left-0 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li><a>Item 2</a></li>
                                                </ul>
                                            )}
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default PaidInvoice;