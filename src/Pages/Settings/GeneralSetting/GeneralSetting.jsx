/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../Reports/YearlyInvoice/CSS/TableTanStackCss.css";
import { IoIosImages } from "react-icons/io";
import InvoiceTerms from "./InvoiceTerm/InvoiceTerms";
import TinyMCE2 from "../TinyMCE2";

const GeneralSetting = () => {
  const [image, setImage] = useState("");

  const convertToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error : ", error);
    };
  };

  const [image2, setImage2] = useState("");

  const convertToBase642 = (e) => {
    const reader2 = new FileReader();
    reader2.readAsDataURL(e.target.files[0]);
    reader2.onload = () => {
        setImage2(reader2.result);
    };
    reader2.onerror = (error) => {
      console.log("Error : ", error);
    };
  };
  const clearImage = (e) => {
    e.preventDefault();
    setImage(""); // Clear image state
  };

  const clearImage2 = (e) => {
    e.preventDefault();
    setImage2(""); // Clear image2 state
  };


  return (
    <div className="mb-16">
      {/* General Setting  */}
      <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5 pl-1">
        <h1 className="w-full mx-auto  text-3xl dark:text-white text-black ">
          General Settings
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row item-center justify-between gap-5">
        {/* Sidebar part */}
        <div className="mt-5 md:mt-0 lg:w-[50%]">
          <div className="bg-white dark:bg-[#2F3249] shadow-xl border dark:border-none rounded-lg">
            <h1 className="text-3xl font-normal bg-blue-200 pl-4 mb-2 border-b py-2 bg-[#0d0e0e08] dark:bg-gray-500 dark:border-none dark:text-white text-black dark:rounded-sm">
              Sidebar
            </h1>
            <div className="w-full">
              <form className="">
                <div className="flex flex-col md:flex-row justify-between lg:gap-4 w-full ">
                  <div className="ml-4 mr-4 lg:mr-4 md:w-[50%] ">
                    <h1 className="md:mt-2 font-bold text-lg  text-black dark:text-white">
                      Sidebar Logo
                      <span className="pl-1 text-red-400">
                        ( Recommended W:250px,H:150px)
                      </span>
                    </h1>
                    {/* image */}
                    <div className="flex justify-between items-end mb-2 lg:mb-4 ">
                      <div className="md:w-[300px] h-[150px] pt-2">
                        {image == "" || image == null ? (
                          <label
                            id="uploadImage"
                            htmlFor="uploadBtn"
                            className="h-[100%] w-[100%] text-start"
                          >
                            <IoIosImages className="h-[100%] w-[100%] text-gray-600 dark:text-white" />
                          </label>
                        ) : (
                          <img
                            src={image}
                            className="w-[100%] h-[100%] p-2"
                            alt=""
                          />
                        )}
                        <span className="text-lg md:text-xs xl:text-base pl-2"></span>
                        <input
                          type="file"
                          id="uploadBtn"
                          onChange={convertToBase64}
                        />
                      </div>
                      <div className="text-2xl md:pr-8 pb-2 w-[50%] text-end">
                        <button className="text-gray-600 dark:text-white" onClick={clearImage}>X</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[65%] lg:w-[50%] pr-4 md:pr-6 pl-4 md:pl-0">
                    {/* name */}
                    <div className=" mt-2">
                      <label
                        htmlFor="width"
                        className="text-xl leading-6 text-[#212529] dark:text-white "
                      >
                        Logo Width
                        <span className="pl-1 text-red-400">(In pixel)</span>
                      </label>
                      <input
                        type="number"
                        name="logoWidth"
                        className=" block w-full mt-2 rounded-md border-0 py-2.5 pl-4 pr-3 text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:border-none bg-[#f7f7fa] dark:bg-base-100 dark:ring-base-100"
                        placeholder="Width"
                      />
                    </div>
                    <div className="mt-4 mb-4">
                      <label
                        htmlFor="height"
                        className="text-xl leading-6 text-[#212529] dark:text-white "
                      >
                        Logo Height
                        <span className="pl-1 text-red-400">(In pixel)</span>
                      </label>
                      <input
                        type="number"
                        name="logoHeight"
                        className="block w-full mt-2 rounded-md border-0 py-2.5 pl-4 pr-3 text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:border-none bg-[#f7f7fa] dark:bg-base-100 dark:ring-base-100"
                        placeholder="Height"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="py-2 px-6 border border-blue-200  bg-blue-200 dark:bg-gray-60 text-end  dark:rounded-sm">
              <button className="rounded-lg text-lg border-none hover:bg-green-400 font-normal bg-[#28C76F] text-white py-1 px-2">
                Update Logo
              </button>
            </div>
          </div>
        </div>

        {/* Invoice part */}
        <div className=" lg:w-[50%]">
          <div className="bg-white dark:bg-[#2F3249] shadow-xl border dark:border-none rounded-lg">
            <h1 className="text-3xl bg-blue-200 dark:bg-gray-600 font-normal pl-4 mb-2 border-b py-2 bg-[#0d0e0e08]  dark:border-none dark:text-white text-black dark:rounded-sm">
              Invoice
            </h1>
            <div className="w-full">
              <form className="">
                <div className="flex flex-col md:flex-row justify-between lg:gap-4 w-full ">
                  <div className="ml-4 mr-4 lg:mr-4 md:w-[50%] ">
                    <h1 className="md:mt-2 font-bold text-lg text-black dark:text-white">
                      Invoice Logo
                      <span className="pl-1 text-red-400">
                        ( Recommended W:250px,H:150px)
                      </span>
                    </h1>
                    {/* image */}
                    <div className="flex justify-between items-end mb-2 lg:mb-4 ">
                      <div className="md:w-[300px] h-[150px] pt-2">
                        {image2 == "" || image2 == null ? (
                          <label
                            id="uploadImage2"
                            htmlFor="uploadBtn2"
                            className="h-[100%] w-[100%] text-start"
                          >
                            <IoIosImages className="h-[100%] w-[100%] text-gray-600 dark:text-white" />
                          </label>
                        ) : (
                          <img
                            src={image}
                            className="w-[100%] h-[100%] p-2"
                            alt=""
                          />
                        )}
                        <span className="text-lg md:text-xs xl:text-base pl-2"></span>
                        <input
                          type="file"
                          id="uploadBtn2"
                          onChange={convertToBase642}
                        />
                      </div>
                      <div className="text-2xl md:pr-8 pb-2 w-[50%] text-end">
                        <button className="text-gray-600 dark:text-white" onClick={clearImage2}>X</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[65%] lg:w-[50%] pr-4 md:pr-6 pl-4 md:pl-0">
                    {/* name */}
                    <div className=" mt-2">
                      <label
                        htmlFor="width"
                        className="text-xl leading-6 text-[#212529] dark:text-white "
                      >
                        Logo Width
                        <span className="pl-1 text-red-400">(In pixel)</span>
                      </label>
                      <input
                        type="number"
                        name="logoWidth"
                        className=" block w-full mt-2 rounded-md border-0 py-2.5 pl-4 pr-3 text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:border-none bg-[#f7f7fa] dark:bg-base-100 dark:ring-base-100"
                        placeholder="Width"
                      />
                    </div>
                    <div className="mt-4 mb-4">
                      <label
                        htmlFor="height"
                        className="text-xl leading-6 text-[#212529] dark:text-white "
                      >
                        Logo Height
                        <span className="pl-1 text-red-400">(In pixel)</span>
                      </label>
                      <input
                        type="number"
                        name="logoHeight"
                        className="block w-full mt-2 rounded-md border-0 py-2.5 pl-4 pr-3 text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:border-none bg-[#f7f7fa] dark:bg-base-100 dark:ring-base-100"
                        placeholder="Height"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className=" pl-5 border dark:border-none py-2 px-6  text-end bg-[#0d0e0e08] dark:bg-gray-500 dark:rounded-sm">
              <button className="rounded-lg text-lg border-none hover:bg-green-400 font-normal bg-[#28C76F] text-white py-1 px-2">
                Update Logo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-5 w-[100%] gap-5">
        {/* invoice terms */}
        <div className="bg-white dark:bg-[#2F3249] shadow-xl border dark:border-none rounded-lg w-[100%]  lg:w-[50%]">
          <h1 className="text-3xl font-normal bg-blue-200 dark:bg-gray-600 pl-4 border-b py-2 bg-[#0d0e0e08]  dark:border-none dark:text-white text-black dark:rounded-sm">
            Invoice Terms
          </h1>
          <div className="w-full">
           <TinyMCE2></TinyMCE2>
          </div>
          <div className=" pl-5 border dark:border-none py-2 px-6  text-end bg-[#0d0e0e08] dark:bg-gray-500 dark:rounded-sm">
            <button className="rounded-lg text-lg border-none hover:bg-green-400 font-normal bg-[#28C76F] text-white py-1 px-2">
              Update Logo
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="bg-white dark:bg-[#2F3249] shadow-xl border dark:border-none rounded-lg w-[100%]  lg:w-[50%] ">
          <h6 className="text-3xl font-normal bg-blue-200 dark:bg-gray-600 pl-4 mb-2 border-b py-2 bg-[#0d0e0e08]  dark:border-none dark:text-white text-black dark:rounded-sm">
            Footer Text
          </h6>
          <div className="w-full">
            <form className="">
              <div className="pl-4 pt-2 pr-6">
                <h6 className=" text-base mr-7 text-black dark:text-white">
                  Footer Text
                  <span className="text-red-500 pl-1">(required)</span>
                </h6>
                <textarea
                  className="textarea textarea-bordered w-[100%] bg-white dark:bg-base-100 text-gray-900"
                  placeholder="Text"
                ></textarea>
              </div>
            </form>
          </div>
          <div className=" pl-5 border dark:border-none py-2 px-6  text-end bg-[#0d0e0e08] dark:bg-gray-500 dark:rounded-sm">
            <button className="rounded-lg text-lg border-none hover:bg-green-400 font-normal bg-[#28C76F] text-white py-1 px-2">
              Update Logo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GeneralSetting;
