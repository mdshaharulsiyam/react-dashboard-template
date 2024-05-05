/* eslint-disable no-unused-vars */
import React from 'react';
import CategoryModal from './CategoryModal';

const CategoryList = () => {
    return (
        <div >
            <div>
                <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5">
                    <h1 className="w-full mx-auto  text-3xl dark:text-white text-black ">Category List</h1>
                </div>


                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className='border dark:border-none rounded-md dark:bg-[#2F3349] p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none  mb-4 w-full'>

                        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:bg-gray-500 bg-[#DDDBFB] dark:border-gray-600 border mb-4 w-full '>
                            <div className='flex class  w-ful '>
                                <button className='btn rounded-none border-none bg-success text-white hover:bg-green-600 '>ALL(1)</button>
                                <button className='btn rounded-none border-none text-blue-600 bg-[#DDDBFB] hover:bg-green-600 dark:hover:bg-green-600 hover:text-white dark:bg-gray-600  dark:text-white'>Active(1)</button>
                                <button className='btn rounded-none border-none text-blue-600 bg-[#DDDBFB] hover:bg-green-600  dark:hover:bg-green-600  hover:text-white dark:bg-gray-600 dark:text-white dar'>Inactive(0)</button>
                            </div>

                            <CategoryModal></CategoryModal> 

                        </div>

                    </div>

                    <div className="overflow-x-auto">
                        <table className="table border dark:border-gray-600">
                            {/* head */}
                            <thead >
                                <tr className='uppercase text-center font-bold bg-[#DDDBFB] text-black  dark:bg-gray-500 dark:border-gray-600  text-lg dark:text-white'>
                                    <th className=' '>Name</th>
                                    <th className='border dark:border-gray-600'>status</th>
                                </tr>
                            </thead>
                            <tbody className=' text-center'>
                                {/* row 1 */}
                                
                                <tr>
                                    <th
                                        className={`px-6 pt-2 font-medium whitespace-nowrap text-center relative group pb-8 text-lg border dark:border-gray-600 text-black dark:text-white `}
                                    >
                                        Beauty
                                        <div className="absolute text-center  opacity-0 group-hover:opacity-100 flex items-center ">
                                            <h1 className="text-base font-bold text-blue-600 text-center">
                                                Edit <span className='text-black'>|</span> <span className='text-yellow-400'>Inactive</span>
                                            </h1>

                                        </div>
                                    </th>  
                                   
                                   
                                    <td className='border dark:border-gray-600'>
                                        <button className='rounded-md bg-success border-none text-white py-0 px-2'>Active</button>
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

export default CategoryList;