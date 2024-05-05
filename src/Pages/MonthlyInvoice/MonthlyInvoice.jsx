/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

const MonthlyInvoice = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="mt-4">
      <h1 className="text-2xl text-black bg-[#f7f7fa] dark:bg-[#2F3349] dark:border-none mb-6 border-b py-2 dark:rounded-sm dark:text-white">
        Between Report List
      </h1>
      <div className="card flex flex-col lg:flex-row lg:items-center lg:justify-between  gap-3 p-fluid">
        <div className="flex-auto lg:w-[47%] ">
          <label
            htmlFor="buttondisplay"
            className="font-bold block mb-2 text-black dark:text-white"
          >
            Select Date
          </label>
          <Calendar
            id="buttondisplay"
            className="border border-gray-400 dark:border-black dark:bg-base-100 rounded-md pl-5 pr-2 py-2"
            placeholder=""
            value={date}
            onChange={(e) => setDate(e.value)}
            showIcon
          />
        </div>
        <div className="flex-auto lg:w-[47%] ">
          <label
            htmlFor="buttondisplay"
            className="font-bold block mb-2 text-black dark:text-white"
          >
            Select Date
          </label>
          <Calendar
            id="buttondisplay"
            className="border border-gray-400 dark:border-black dark:bg-base-100 rounded-md pl-5 pr-2 py-2"
            placeholder=""
            value={date}
            onChange={(e) => setDate(e.value)}
            showIcon
          />
        </div>

        <div className="flex-auto lg:w-[5%] lg:mt-8">
          <button className="btn btn-success text-white "> Search</button>
        </div>
      </div>

      <div className="">
        <div className="border dark:border-black p-4 mt-5 rouded-lg ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none  mb-4 w-full">
            <div className="flex flex-row bg-[#DDDBFB] items-center justify-between gap-2 md:gap-0 dark:border-black border mb-4 w-full">
              <div className="flex  w-ful">
                <button className="btn rounded-none border-none bg-success text-white hover:bg-green-600 ">
                  ALL(1)
                </button>
                <button className="w-[100%]  bg-[#f7f7f7] dark:bg-base-100 "></button>
              </div>
              <button className="btn rounded-none bg-success text-white border-none hover:bg-green-600">
                New Category
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table border dark:border-black">
              {/* head */}
              <thead>
                <tr className="uppercase text-center font-bold text-black bg-[#DDDBFB] dark:bg-base-100 dark:border-black text-lg dark:text-white">
                  <th className=" ">Name</th>
                  <th className="border dark:border-black">status</th>
                </tr>
              </thead>
              <tbody className=" text-center">
                {/* row 1 */}

                <tr>
                  <th
                    className={`px-6 pt-2 font-medium whitespace-nowrap text-center relative group pb-8 text-lg border dark:border-black text-black dark:text-white `}
                  >
                    Beauty
                    <div className="absolute text-center  opacity-0 group-hover:opacity-100 flex items-center ">
                      <h1 className="text-base font-bold text-blue-600 text-center">
                        Edit <span className="text-black">|</span>{" "}
                        <span className="text-yellow-400">Inactive</span>
                      </h1>
                    </div>
                  </th>

                  <td className="border dark:border-black">
                    <button className="rounded-md bg-success border-none text-white py-0 px-2">
                      Active
                    </button>
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

export default MonthlyInvoice;
