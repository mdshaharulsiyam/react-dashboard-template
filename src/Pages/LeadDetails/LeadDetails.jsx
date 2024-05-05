/* eslint-disable no-unused-vars */
import React from "react";
import { Tab } from "@headlessui/react";
import { FaExclamationTriangle } from "react-icons/fa";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { Dropdown } from "semantic-ui-react";
import phone from "../../assets/phone.jpg";
import CategoryModal from "../Expense/CategoryList/CategoryModal";
import Btn from "../../Components/Shared/Btn/Btn";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
];

const LeadDetails = () => {
  return (
    <div className="mb-16 dark:text-white">
      <h1 className=" py-4 w-full mx-auto  text-3xl dark:text-white text-black ">
        Personal Profile
      </h1>

      <div className="flex flex-col md:flex-row gap-7">
        {/*Green House Hotel & Tours (Budget Hotel Nearest Dhaka Airport) part */}

        <div className="flex flex-col md:w-[40%] lg:w-[30%] gap-7">
          <div className=" bg-white dark:bg-[#2F3249] w-full  shadow-2xl rounded-lg border dark:border-none pb-10 ">
            <h1 className="text-3xl text-black bg-[#f7f7fa] dark:bg-gray-500 dark:border-none rounded-sm py-2 dark:rounded-sm dark:text-white border px-4 mx-auto">
              Green House Hotel & Tours (Budget Hotel Nearest Dhaka Airport)
            </h1>
            <div className="mx-4">
              <img
                className="w-[100%] h-[250px] rounded-sm border"
                src="https://mylead.xyz/uploads/organization_image/1711446930.png"
                alt="girls-image"
              />
            </div>
            {/* superAdmin title */}
            <div className="text-center ">
              <h1 className="mt-2 text-2xl dark:text-white text-black">
                Khan Tassen Islam
              </h1>
            </div>
            {/* WB-MR-0012 button */}
            <div className="w-[24%] md:w-[32%] xl:w-[33%]  border mx-auto rounded-sm text-white text-xs xl:text-lg bg-blue-500  font-bol mb-3 dark:border-none dark:text-white text-center">
              WB-MR-0012
            </div>
            <div className="flex justify-between items-center p-2">
              <div className="border border-dashed border-gray-300 px-2">
                <h1>1200tk</h1>
                <p>Installation Charge</p>
              </div>
              <div className="border border-gray-300 border-dashed px-2">
                <h1>tk</h1>
                <p>Monthly Charge</p>
              </div>
            </div>

            <div className="flex justify-between items-center my-4 mx-2">
              <h1>Details</h1>
              {/* <button className='border-none text-white bg-blue-500 hover:bg-blue-700 p-3 rounded-md'>Edit</button> */}
              <CategoryModal></CategoryModal>
            </div>
            <hr />

            <div className=" pr-2 pl-4 mt-5">
              <p className="text-xl flex justify-start gap-2  m-0">
                <span className=" text-xl  font-bold ">Email : </span>
                uttara@gmail.com
              </p>
              <p className="text-xl flex items-start justify-start gap-2 m-0">
                <span className=" font-bold">Mobile : </span>
                01200000000
              </p>
              <p className="text-xl flex items-start justify-start gap-2 m-0">
                <span className=" font-bold">Telephone : </span>
                uttara@gmail.com
              </p>
              <p className="text-xl flex  justify-start gap-2 m-0">
                <span className=" font-bold w-[18%]">
                  Address :{" "}
                </span>
                <span className="text-lg w-[80%]">
                  Jalal Plaza (2nd floor), 84, CDA Avenue, Muradpur, Chittagong,
                  Chattogram 4000
                </span>
              </p>
              <p className="text-xl flex items-start justify-start gap-2 m-0">
                <span className=" font-bold">District : </span>
                Chittagong
              </p>
              <p className="text-xl flex items-start justify-start gap-2 m-0">
                <span className=" font-bold">Interest : </span>40%
              </p>
              <p className="text-xl flex items-start justify-start gap-2 m-0">
                <span className="font-bold ">Google Map : </span>Map
                Link
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2F3249]  shadow-2xl rounded-lg border dark:border-none ">
            <div className=" flex justify-between items-center px-2  border-b border mb-10">
              <h1 className="font-bold p-3">Status</h1>
              <button className="border-none text-white bg-warning p-2 rounded-md">
                Processing
              </button>
            </div>
            <hr />
            <div className="px-2 pb-2">
              <button className="border-none text-white bg-blue-500 p-2 rounded-md mt-2 w-full  text-lg">
                Change Status
              </button>
            </div>
          </div>
        </div>

        {/* 2nd part */}

        <div className="md:w-[60%] lg:w-[70%] ">
          <div className=" mb-5 ">
            <Tab.Group>
              <Tab.List className="flex justify-start bg-blue-200 dark:bg-gray-600 dark:text-white items-start text-black p-1 border dark:border-gray-400 mb-6 rounded-sm ">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      " rounded-sm py-2 font-semibold leading-5 m-2 p-2",
                      " focus:outline-none",
                      selected
                        ? "bg-blue-500 text-white w-24"
                        : " hover:bg-white/[0.12] hover:text-gray-500 dark:hover:bg-blue-500 dark:hover:text-white w-24"
                    )
                  }
                >
                  Contact
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      " rounded-sm py-2 font-semibold leading-5 m-2",
                      " focus:outline-none",
                      selected
                      ? "bg-blue-500 text-white w-24"
                      : " hover:bg-white/[0.12] hover:text-gray-500 dark:hover:bg-blue-500 dark:hover:text-white w-24"
                    )
                  }
                >
                  Alert
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      " rounded-sm py-2 font-semibold leading-5 m-2",
                      " focus:outline-none",
                      selected
                      ? "bg-blue-500 text-white w-24"
                      : " hover:bg-white/[0.12] hover:text-gray-500 dark:hover:bg-blue-500 dark:hover:text-white w-24"
                    )
                  }
                >
                  Note
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      " rounded-sm py-2 font-semibold leading-5 m-2",
                      " focus:outline-none",
                      selected
                      ? "bg-blue-500 text-white w-24"
                      : " hover:bg-white/[0.12] hover:text-gray-500 dark:hover:bg-blue-500 dark:hover:text-white w-24"
                    )
                  }
                >
                  Payment
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2 shadow-2xl">
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border dark:border-gray-400 border-primary3 ",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 2px" }}
                    className="border dark:border-none rounded-md dark:bg-[#2F3349] p-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none  mb-4 w-full">
                      <div className="flex bg-blue-200 dark:bg-gray-600 flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-gray-600 border mb-4 w-full ">
                        <div className="flex  w-ful ">
                          {/* <button className='btn rounded-none border-none bg-success text-white hover:bg-green-600 '>ALL(1)</button> */}
                          <Btn text="All" />
                          <button className="btn rounded-none border-none text-blue-600 bg-blue-200 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white dark:bg-gray-600 dark:text-white">
                            Active(1)
                          </button>
                          <button className="btn rounded-none border-none text-blue-600 bg-blue-200 hover:bg-green-600  dark:hover:bg-green-600  hover:text-white dark:bg-gray-600 dark:text-white dar">
                            Inactive(0)
                          </button>
                        </div>

                        <CategoryModal></CategoryModal>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="table border dark:border-gray-600">
                        {/* head */}
                        <thead>
                          <tr className="uppercase text-center font-bold text-black bg-blue-200 dark:bg-gray-500 dark:border-gray-600  text-lg dark:text-white">
                            <th className=" ">Name</th>
                            <th className="border dark:border-gray-600">
                              status
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" text-center">
                          {/* row 1 */}

                          <tr>
                            <th
                              className={`px-6 pt-2 font-medium whitespace-nowrap text-center relative group pb-8 text-lg border dark:border-gray-600 text-black dark:text-white `}
                            >
                              Beauty
                              <div className="absolute text-center  opacity-0 group-hover:opacity-100 flex items-center ">
                                <h1 className="text-base font-bold text-blue-600 text-center">
                                  Edit <span className="text-black">|</span>{" "}
                                  <span className="text-yellow-400">
                                    Inactive
                                  </span>
                                </h1>
                              </div>
                            </th>

                            <td className="border dark:border-gray-600">
                              <button className="rounded-md bg-success border-none text-white py-0 px-2">
                                Active
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border dark:border-gray-400 border-primary3 ",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 2px" }}
                    className="border dark:border-none rounded-md dark:bg-[#2F3349] p-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none  mb-4 w-full">
                      <div className="flex bg-blue-200 dark:bg-gray-600 flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-gray-600 border mb-4 w-full ">
                        <div className="flex  w-ful ">
                          {/* <button className='btn rounded-none border-none bg-success text-white hover:bg-green-600 '>ALL(1)</button> */}
                          <Btn text="All" />
                          <button className="btn rounded-none border-none text-blue-600 bg-blue-200 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white dark:bg-gray-600 dark:text-white">
                            Active(1)
                          </button>
                          <button className="btn rounded-none border-none text-blue-600 bg-blue-200 hover:bg-green-600  dark:hover:bg-green-600  hover:text-white dark:bg-gray-600 dark:text-white dar">
                            Inactive(0)
                          </button>
                        </div>

                        <CategoryModal></CategoryModal>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="table border dark:border-gray-600">
                        {/* head */}
                        <thead>
                          <tr className="uppercase text-center font-bold text-black bg-blue-200 dark:bg-gray-500 dark:border-gray-600  text-lg dark:text-white">
                            <th className=" ">Name</th>
                            <th className="border dark:border-gray-600">
                              status
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" text-center">
                          {/* row 1 */}

                          <tr>
                            <th
                              className={`px-6 pt-2 font-medium whitespace-nowrap text-center relative group pb-8 text-lg border dark:border-gray-600 text-black dark:text-white `}
                            >
                              Beauty
                              <div className="absolute text-center  opacity-0 group-hover:opacity-100 flex items-center ">
                                <h1 className="text-base font-bold text-blue-600 text-center">
                                  Edit <span className="text-black">|</span>{" "}
                                  <span className="text-yellow-400">
                                    Inactive
                                  </span>
                                </h1>
                              </div>
                            </th>

                            <td className="border dark:border-gray-600">
                              <button className="rounded-md bg-success border-none text-white py-0 px-2">
                                Active
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border dark:border-gray-400 border-primary3 ",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 2px" }}
                    className="border dark:border-none rounded-md dark:bg-[#2F3349] p-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none  mb-4 w-full">
                      <div className="flex bg-blue-200 dark:bg-gray-600 flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-gray-600 border mb-4 w-full ">
                        <div className="flex  w-ful ">
                          {/* <button className='btn rounded-none border-none bg-success text-white hover:bg-green-600 '>ALL(1)</button> */}
                          <Btn text="All" />
                          <button className="btn rounded-none border-none text-blue-600 bg-blue-200 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white dark:bg-gray-600 dark:text-white">
                            Active(1)
                          </button>
                          <button className="btn rounded-none border-none text-blue-600 bg-blue-200 hover:bg-green-600  dark:hover:bg-green-600  hover:text-white dark:bg-gray-600 dark:text-white dar">
                            Inactive(0)
                          </button>
                        </div>

                        <CategoryModal></CategoryModal>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="table border dark:border-gray-600">
                        {/* head */}
                        <thead>
                          <tr className="uppercase text-center font-bold text-black bg-blue-200 dark:bg-gray-500 dark:border-gray-600  text-lg dark:text-white">
                            <th className=" ">Name</th>
                            <th className="border dark:border-gray-600">
                              status
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" text-center">
                          {/* row 1 */}

                          <tr>
                            <th
                              className={`px-6 pt-2 font-medium whitespace-nowrap text-center relative group pb-8 text-lg border dark:border-gray-600 text-black dark:text-white `}
                            >
                              Beauty
                              <div className="absolute text-center  opacity-0 group-hover:opacity-100 flex items-center ">
                                <h1 className="text-base font-bold text-blue-600 text-center">
                                  Edit <span className="text-black">|</span>{" "}
                                  <span className="text-yellow-400">
                                    Inactive
                                  </span>
                                </h1>
                              </div>
                            </th>

                            <td className="border dark:border-gray-600">
                              <button className="rounded-md bg-success border-none text-white py-0 px-2">
                                Active
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border dark:border-gray-400 border-primary3 ",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 2px" }}
                    className="border dark:border-none rounded-md dark:bg-[#2F3349] p-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none  mb-4 w-full">
                      <div className="flex bg-blue-200 dark:bg-gray-600 flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-gray-600 border mb-4 w-full ">
                        <div className="flex  w-ful ">
                          {/* <button className='btn rounded-none border-none bg-success text-white hover:bg-green-600 '>ALL(1)</button> */}
                          <Btn text="All" />
                          <button className="btn rounded-none border-none text-blue-600 bg-blue-200 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white dark:bg-gray-600 dark:text-white">
                            Active(1)
                          </button>
                          <button className="btn rounded-none border-none text-blue-600 bg-blue-200 hover:bg-green-600  dark:hover:bg-green-600  hover:text-white dark:bg-gray-600 dark:text-white dar">
                            Inactive(0)
                          </button>
                        </div>

                        <CategoryModal></CategoryModal>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="table border dark:border-gray-600">
                        {/* head */}
                        <thead>
                          <tr className="uppercase text-center font-bold text-black bg-blue-200 dark:bg-gray-500 dark:border-gray-600  text-lg dark:text-white">
                            <th className=" ">Name</th>
                            <th className="border dark:border-gray-600">
                              status
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" text-center">
                          {/* row 1 */}

                          <tr>
                            <th
                              className={`px-6 pt-2 font-medium whitespace-nowrap text-center relative group pb-8 text-lg border dark:border-gray-600 text-black dark:text-white `}
                            >
                              Beauty
                              <div className="absolute text-center  opacity-0 group-hover:opacity-100 flex items-center ">
                                <h1 className="text-base font-bold text-blue-600 text-center">
                                  Edit <span className="text-black">|</span>{" "}
                                  <span className="text-yellow-400">
                                    Inactive
                                  </span>
                                </h1>
                              </div>
                            </th>

                            <td className="border dark:border-gray-600">
                              <button className="rounded-md bg-success border-none text-white py-0 px-2">
                                Active
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
