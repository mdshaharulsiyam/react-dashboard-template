/* eslint-disable no-unused-vars */
import React from 'react';
import NewServiceModal from '../Services/NewServiceModal/NewServiceModal';

const Provider = () => {
    return (
        <div>
            <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5">
                <h1 className="text-2xl md:text-3xl text-900 font-medium md:ml-0">Provider List</h1>
            </div>
            <div className='border p-4'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 md:border mb-4 w-full'>
                    <div className='flex border md:border-none w-full'>
                        <button className='btn rounded-none border-none bg-success text-white '>ALL</button>
                        <button className='btn rounded-none border-none text-blue-600 bg-[#f7f7f7]'>Active</button>
                        <button className='btn rounded-none border-none text-blue-600 bg-[#f7f7f7]'>Inactive</button>
                        <button className='w-[100%]  bg-[#f7f7f7]'></button>
                    </div>

                    <NewServiceModal></NewServiceModal>
                    
                </div>

                <div className="overflow-x-auto">
                    <table className="table border">
                        {/* head */}
                        <thead >
                            <tr className='uppercase text-center font-bold text-black bg-[#F2F2F2] text-lg'>
                               
                                <th className='border '>Photo</th>
                                <th className='border'>Details</th>
                                <th className='border'>Cration of Date/Time</th>
                                <th className='border'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='border text-center'>
                            {/* row 1 */}
                            <tr>
                               
                                <td className='border'>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <td className='border'>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            
                            
                            
                            
                        </tbody>
                       

                    </table>
                </div>
            </div>
            


        </div>
    );
};

export default Provider;