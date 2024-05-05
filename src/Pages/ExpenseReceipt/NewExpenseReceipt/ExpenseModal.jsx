/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ExpenseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="py-2 w-full text-center bg-[#f7f7f7] dark:bg-base-100 ">
        <button type="button" onClick={() => setIsOpen(true)} className="bg-[#5bc0de] w-[90%] h-[40px] text-white  text-lg font-bold">
          +Add
        </button>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(true)} >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-[96%] md:w-[90%] lg:w-[75%]  xl:w-[910px] max-w-md:w-[60%] transform overflow-hidden rounded-2xl bg-white dark:bg-[#25293C] text-left align-middle shadow-xl transition-all my-10">
                    <Dialog.Title
                      as="h3"
                      className=" items-center pl-4 font-bold text-lg leading-6 text-gray-900 dark:bg-gray-500 bg-gray-200  dark:border-none border border-gray-300 pb-2 pt-3  md:text-xl"
                    >
                      <div className="flex  items-center justify-between">
                        <h5 className=" font-light dark:text-white text-xl pt-2 ">New Expense Category</h5>
                        <button onClick={() => setIsOpen(false)} className="close-button dark:text-white pr-6 font-light">X</button>
                      </div>
                    </Dialog.Title>
                    {/* <hr className="mt-4" /> */}
                    <div className="flex flex-col md:flex-row justify-between gap-2 px-6">
                      {/* Expense Category */}
                      <div className="mt-2 md:w-[32%]">
                        <h6 className="text-lg text-gray-900 dark:text-white">Expense Category<span className="text-red-500">(required)</span> </h6>
                        <input
                          type="text "
                          placeholder="Expense Category "
                          className="input input-bordered w-full bg-[#f7f7f7] dark:bg-base-100"
                        />
                      </div>
                      {/* Expense */}
                      <div className="mt-2 md:w-[32%]">
                        <h6 className="text-lg text-gray-900 dark:text-white">Expense<span className="text-red-500">(required)</span></h6>
                        <input
                          type="text"
                          placeholder="Expense"
                          className="input input-bordered w-full bg-[#f7f7f7] dark:bg-base-100"
                        />
                      </div>
                      {/* Expense Amount */}
                      <div className="mt-2 md:w-[32%]">
                        <h6 className="text-lg text-gray-900 dark:text-white">Expense Amount<span className="text-red-500">(required)</span></h6>
                        <input
                          type="number"
                          placeholder="Expense Amount"
                          className="input input-bordered w-full bg-[#f7f7f7] dark:bg-base-100"
                        />
                      </div>
                    </div>
                    {/* Expense Details  */}
                    <div className='pt-4 py-2 px-6 '>
                      <h6 className="label-text text-lg text-gray-900 mr-7 pb-2  dark:text-white">Expense Details <span className="text-red-500">(required) </span></h6>
                      <textarea className="textarea textarea-bordered w-[98%] md:w-full bg-[#f7f7f7] dark:bg-base-100" placeholder="Expense Details"></textarea>
                    </div>
                    <div className=" mt-4 px-6 py-4 border border-gray-300 flex gap-2 justify-end dark:bg-gray-500 dark:border-none bg-gray-200">
                      <button className="bg-[#5cb85c] text-lg text-white ml-4 inline-flex justify-center rounded-md border border-transparent  px-4 py-2  font-medium  hover:bg-green-700 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2">
                        Save
                      </button>
                      <button
                        type="button"
                        className="bg-[#d9534f] inline-flex text-white justify-center rounded-md border border-transparent  px-4 py-2 text-lg font-medium hover:bg-red-700 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};
export default ExpenseModal;