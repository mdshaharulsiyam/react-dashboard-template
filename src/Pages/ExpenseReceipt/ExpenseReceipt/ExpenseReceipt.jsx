/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseReceipt = () => {
    return (
    
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className='dark:bg-[#2F3349] rounded-md'>
            <p className="w-full mx-auto pt-4 text-3xl dark:text-white text-[#212529] text-[16px] md:text-[24px] lg:text-[28px] my-[12px]">Expense Receipt List</p>
            
                <div className=" border dark:border-none p-4 mt-5 ">
                    <div className='flex flex-row md:flex-row items-center bg-[#DDDBFB] justify-between md:gap-0 md:border dark:border-none mb-4 w-full '>
                        <div className='flex w-full  dark:bg-gray-500 '>
                            <button className='btn rounded-none border-none bg-green-500 text-white'>ALL</button>
                        </div>
                    <Link className='min-w-fit' to='/newExpenseReceipt'>
                        <button className='btn rounded-none border-none bg-green-500 text-white px-7 hover:bg-green-400'>New Expense List</button>
                    </Link>      
                        
                    </div>


                <div className="relative rounded-sm " style={{ overflow: 'auto' }}>
                    <table className="w-full text-sm text-left rtl:text-right  border dark:border-none">
                        <thead className="text-xs text-black uppercase dark:border-none border bg-[#DDDBFB] dark:bg-gray-500 text-center">
                                <tr className='border dark:border-none'>
                                    <th
                                        scope="col"
                                        className="px-6 py-3  w-[30%] font-bold text-xl border dark:border-none"
                                    >
                                        Expense ID
                                    </th>
                                    <th
                                        scope="col"
                                    className="px-6 py-3 w-[30%] font-bold text-xl border dark:border-none"
                                    >
                                       Received By
                                    </th>
                                <th scope="col" className="px-6 py-3 w-[40p%] font-bold text-xl border dark:border-none">
                                       Created At
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr className="bg-white  text-black hover:bg-gray-50 dark:bg-[#2F3349] dark:text-gray-300">
                                <th
                                    className={`px-6 pt-2 font-medium whitespace-nowrap dark:border-none relative group pb-8 text-lg `}
                                >
                                    Id
                                    <div className="absolute opacity-0 group-hover:opacity-100 flex items-center ">
                                        <button className="text-base font-bold text-blue-600 text-center">
                                           Invoice View
                                        </button>
                                    </div>
                                </th>                              
                                    <td className="px-6 pb-4 text-lg border dark:border-none">Superadmin</td>
                                <td className="px-6 pb-4 text-lg">Date : 18-05-23</td>
                                   
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>

           
            </div>


          


    
    );
};

export default ExpenseReceipt;