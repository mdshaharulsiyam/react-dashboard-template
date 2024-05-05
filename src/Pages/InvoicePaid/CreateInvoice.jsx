/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";

import { MdMiscellaneousServices } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import Select from "react-select";
import { Dropdown } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import React from "react";
import { Calendar } from 'primereact/calendar';
import DropDownSearch from "../../Components/DropDown/DropDownSearch";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];


const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
]


const CreateInvoice = () => {
  const [date, setDate] = useState(null);

  
  return (
    <>
      <div className="flex flex-col md:flex-row w-[96%] mx-auto md:w-[100%] gap-10 mb-20 bg-white">
        {/* Expanse receive list (1st part) */}
        <div className="border dark:border-gray-700 mt-7 w-full md:w-[76%] mx-auto rounded shadow-2xl pb-16 ">
          <div className="flex flex-col md:flex-row  justify-between px-5 pt-5 gap-2 md:gap-20 lg:gap-2">
            <div className="mb-3 w-[90%] md:w-72 h-[150px] overflow-hidden">
              <img
                className="w-full h-full object-cover" src="https://cashbaksho.com/backend/billing_invoice_logo.png" alt=""
              />

            </div>
            
            <div className="flex flex-col lg:items-end  my-4 lg:my-0 gap-2">
              
              <div className="flex items-center justify-between md:justify-end w-full">
                <span className=" md:text-sm lg:text-lg text-black dark:text-white md:w-[30%] lg:w-[30%] ">
                  Invoice Date :{" "}
                </span>
                <input
                  type="Date"
                  placeholder="Receiver"
                  className="input input-bordered w-[220px] h-[40px] bg-[#f7f7f7] dark:bg-base-100"
                />
              </div>

              {/* <div className="flex justify-center">
                <h6 className="text">Date :</h6>
                <Calendar className="border py-3 w-full mb-2 rounded-lg pl-4 text-gray-400 " value={date} onChange={(e) => setDate(e.value)} />
              </div> */}
              <div className="flex  md:justify-end justify-between items-center  w-full gap-2">
                <span className=" md:text-sm lg:text-lg text-black dark:text-white md:w-[31%] lg:w-[37%]">
                  Invoice Receiver :{" "}
                </span>
                <input
                  type="text"
                  placeholder="Receiver"
                  className="input input-bordered w-[220px] h-[40px] bg-[#f7f7f7] dark:bg-base-100 "
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="flex justify-between items-center my-2 gap-3 mx-4">
            <div className="w-[50%]">
              <label htmlFor="" className="text-black dark:text-white ">
                Billing Branch <span className="text-red-400">(required)</span>
              </label>
              <Dropdown
                placeholder='Select Country'
                fluid
                search
                selection
                options={countryOptions}
              />
             
            </div>
            <div className="w-[50%]">
              <label htmlFor="" className="hover:outline-none hover:border-none text-black dark:text-white ">
                Billing Branch <span className="text-red-400">(required)</span>
              </label>
              <Dropdown
                placeholder='Select Country'
                fluid
                search
                selection
                options={countryOptions}
              />
            </div>
           
          </div>

          <div className="flex  my-2 justify-start mx-4 ">
            <div className="w-[50%] pl-2">
              <p className="text-gray-500">
                <span className=" text-base text-gray-600">Name : </span>Uttaraa
              </p>
              <p className="text-gray-500">
                <span className=" text-base text-gray-600">Mobile : </span>
                01200000000
              </p>
              <p className="text-gray-500">
                <span className=" text-base text-gray-600">Email : </span>
                uttara@gmail.com
              </p>
              <p className="text-gray-500">
                <span className=" text-base text-gray-600">Address : </span>Uttara
              </p>
            </div>
            <div className="w-[50%] pl-2">
              <p className="text-gray-500">
                <span className=" text-base text-gray-600">Name : </span>Uttaraa
              </p>
              <p className="text-gray-500">
                <span className=" text-base text-gray-600">Mobile : </span>
                01200000000
              </p>
              <p className="text-gray-500">
                <span className=" text-base text-gray-600">Email : </span>
                uttara@gmail.com
              </p>
              <p className="text-gray-500">
                <span className=" text-base text-gray-600">Address : </span>Uttara

              </p>
            </div>
          </div>
          <hr />

          {/* service item */}

          <div className="px-4 mt-2 ">
            <h2 className="text-lg text-gray-600">Service Item</h2>
            <div className="gap-3 border p-2">
              <div className="flex justify-between items-center my-2 gap-2 ">
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Service Category{" "}
                    <span className="text-red-400">(required)</span>
                  </label>
                  <Dropdown
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={countryOptions}
                  />
                </div>
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Service Select{" "}
                    <span className="text-red-400">(required)</span>
                  </label>
                  <Dropdown
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={countryOptions}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[100%] gap-2">
                <div className="">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Service Cost{" "}
                    <span className="text-red-400">(required)</span>
                  </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    className="border py-2 boder-black rounded-md w-[100%]"
                  ></input>
                </div>
                <div className="">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Quantity <span className="text-red-400">(required)</span>
                  </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    className="border py-2 boder-black rounded-md w-[100%]"
                  ></input>
                </div>

                <div className="">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Discount <span className="text-red-400">(required)</span>
                  </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    className="border py-2 boder-black rounded-md w-[100%]"
                  ></input>
                </div>

                <div className="">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Total Price <span className="text-red-400">(required)</span>
                  </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    className="border py-2 boder-black rounded-md w-[100%]"
                  ></input>
                </div>
              </div>

              <div className="mt-2">
                <label htmlFor="" className="text-black dark:text-white ">
                  Description <span className="text-red-400">(required)</span>
                </label>
                <textarea
                  name=""
                  rows="4"
                  cols="50"
                  className="w-[100%] border"
                ></textarea>
              </div>
            </div>

            <button className="btn text-white mt-2 bg-purple-500 border-none hover:bg-purple-600 mb-2">
              Add Service
            </button>
          </div>

          <hr />
          <div className="mt-3 mx-4 flex flex-col items-end justify-center">
            <div className="mt-4 mb-2 flex w-full lg:w-[30%]">
              <label htmlFor="" className="w-[30%] text-black dark:text-white ">
                Service Qty:{" "}
              </label>
              <input type="number" id="fname" name="fname" className="border py-2 border-black rounded-md w-[80%]"></input>
            </div>
            <div className="mb-2 flex w-full lg:w-[30%]">
              <label htmlFor="" className="w-[30%] text-black dark:text-white ">
                Sub Total:{" "}

              </label>
              <input type="number" id="fname" name="fname" className="w-[80%] border py-2 boder-black rounded-md "></input>

            </div>
            <div className="mb-2 flex w-full lg:w-[30%]">
              <label htmlFor="" className="text-black dark:text-white w-[30%]">
                Discount:{" "}

              </label>
              <input type="number" id="fname" name="fname" className="border py-2 boder-black rounded-md w-[80%]"></input>

            </div>

            <div className="mb-2 flex w-full lg:w-[31%]">
              <label htmlFor="" className="text-black dark:text-white w-[34%]">
                Total Amount:{" "}

              </label>
              <input type="number" id="fname" name="fname" className="border py-2 boder-black rounded-md w-[80%]"></input>

            </div>
          </div>
        </div>

        <div className="w-[96%] md:w-[24%] m-2 md:m-0">
          {/* billing notes */}
          <div className="border-x dark:border-gray-900 mt-7 mx-auto rounded ">
            <h4 className="text-lg text-black  dark:text-white dark:bg-base-100 pl-3 font-bold bg-[#DDDBFB] py-2">
              <strong className="flex items-center gap-2 justify-start">
                <FaAlignRight />
                Billing Notes
              </strong>
            </h4>
            <div className="pl-3">
              <label className=" text-black dark:text-white text-base ">
                Notes<span className="text-red-500">(required)</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-[95%] bg-white dark:bg-gray-600"
                placeholder="Bio"
              ></textarea>
            </div>
            <hr className="p-0 m-0 dark:invisible" />

            <div className="flex flex-col lg:flex-row py-2 w-full text-center bg-[#f7f7f7] dark:border-none dark:bg-base-100 gap-5 justify-between px-2 ">
              <button className="bg-primary lg:w-[40%]  h-[40px] text-white  dark:border-none flex items-center text-base px-2">
                <span className="flex items-center text-base px-2 gap-1 mx-auto w-[100%] justify-center"><HiUsers /> Client</span>
              </button>
              <button className="bg-[#5cb85c] lg:w-[40%] h-[40px] text-white  dark:border-none  ">
                <span className="flex items-center text-base px-2 gap-1 mx-auto w-[100%] justify-center"><MdMiscellaneousServices /> Service</span>
              </button>
            </div>
          </div>
          {/* Invoice options (2nd part) w-[340px] */}


          <div className="border dark:border-none mt-7 mx-auto rounded">
            <h4 className="text-lg text-black dark:text-white pl-3 py-2 border font-bold bg-[#DDDBFB] dark:bg-base-100 dark:border-none ">
              <strong className="flex items-center gap-2 justify-start">
                <FaAlignRight />
                Invoice Options
              </strong>
            </h4>
            <div className="w-[100%] px-2 mt-2">
              <label htmlFor="" className="text-black dark:text-white ">
                Service Provider{" "}
                <span className="text-red-400">(required)</span>
              </label>
              <Dropdown
                placeholder='Select Country'
                fluid
                search
                selection
                options={countryOptions}
              />
            </div>

            <div className="w-[100%] my-2 px-2">
              <label htmlFor="" className="text-black dark:text-white ">
                Paymnet Type{" "}
                <span className="text-red-400">(required)</span>
              </label>
              <Dropdown
                placeholder='Select Country'
                fluid
                search
                selection
                options={countryOptions}
              />
            </div>
            <div className="w-[100%] pb-2 px-2">
              <label htmlFor="" className="text-black  dark:text-white ">
                Invoice Terms{" "}
                <span className="text-red-400">(required)</span>
              </label>
              <Dropdown
                placeholder='Select Country'
                fluid
                search
                selection
                options={countryOptions}
              />
            </div>
            <hr />

            <div className="py-2 w-full text-center bg-[#f7f7f7] dark:border-none dark:bg-base-100 ">
              <button className="bg-[#5cb85c] w-[90%] h-[40px] text-white text-lg dark:border-none">
                Save
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default CreateInvoice;
