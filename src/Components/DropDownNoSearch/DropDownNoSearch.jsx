/* eslint-disable no-unused-vars */
import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './CSSDrop/Drop.css'

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
]

const DropDownNoSearch = () => {
    return (
        <>
            <div className='w-[100%] mt-5 '>
                <label htmlFor="" className="text-black dark:text-white ">
                    Billing Branch(100%Width) <span className="text-red-400">(required)</span>
                </label>
                <Dropdown clearable options={options} selection className='w-[100%] ' />
            </div>
            <div className='w-[50%] mt-5 '>
                <label htmlFor="" className="text-black dark:text-white ">
                    Billing Branch(50%Width) <span className="text-red-400">(required)</span>
                </label>
                <Dropdown clearable options={options} selection className='w-[100%]' />
            </div>
            <div className='w-[25%] mt-5'>
                <label htmlFor="" className="text-black dark:text-white ">
                    Billing Branch(25%Width) <span className="text-red-400">(required)</span>
                </label>
                <Dropdown clearable options={options} selection className='w-[100%]' />
            </div>

            {/* 2nd Dropdown  */}

            <div className="flex justify-between items-center my-2 gap-3  bg-white  mt-5">
                <div className="w-[50%]">
                    <label htmlFor="" className="text-black dark:text-white ">
                        Billing Branch(50%Width) <span className="text-red-400">(required)</span>
                    </label>
                    <Dropdown clearable options={options} selection className='w-[100%]' />

                </div>
                <div className="w-[50%]">
                    <label htmlFor="" className="text-black dark:text-white ">
                        Billing Branch(50%Width) <span className="text-red-400">(required)</span>
                    </label>
                    <Dropdown clearable options={options} selection className='w-[100%]' />
                </div>
            </div>

            {/* 3rd Dropdown  */}

            <div className="grid grid-cols-3 justify-between items-center my-2 gap-3  bg-white mt-5 pb-20">
                <div className="">
                    <label htmlFor="" className="text-black dark:text-white ">
                        Billing Branch(25%Width) <span className="text-red-400">(required)</span>
                    </label>
                    <Dropdown clearable options={options} selection className='w-[100%]' />
                </div>
                <div className="">
                    <label htmlFor="" className="text-black dark:text-white ">
                        Billing Branch(25%Width) <span className="text-red-400">(required)</span>
                    </label>
                    <Dropdown clearable options={options} selection className='w-[100%]' />
                </div>
                <div className="">
                    <label htmlFor="" className="text-black dark:text-white ">
                        Billing Branch(25%Width) <span className="text-red-400">(required)</span>
                    </label>
                    <Dropdown clearable options={options} selection className='w-[100%]' />
                </div>
            </div>

        </>
       
    );
};

export default DropDownNoSearch;