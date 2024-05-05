/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ExpenseListModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <button onClick={() => setIsOpen(true)} className='btn rounded-none bg-success text-white border-none hover:bg-green-600'>New Expense</button>
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
                                        className="border py-4 pl-4 font-bold text-xl leading- text-gray-900 dark:bg-gray-500 bg-[#f7f7f7] dark:border-none "
                                    >
                                        <div className="flex justify-between items-center gap-2 pr-6 ">
                                            <h1 className="#212529 font-serif text-normal md:text-xl dark:text-white">Expense Name</h1>
                                            <button onClick={() => setIsOpen(false)} className="close-button dark:text-white">X</button>
                                        </div>
                                    </Dialog.Title>
                                    <div className="border dark:border-black bg-[#21252908] text-center">
                                        <p className="w-[95%] md:w-[95%] mx-auto  py-3 text-xl md:text-xl leading-6 text-gray-900 dark:text-white ">
                                            এক্সপেন্স একবার তৈরী হয়ে গেলে Delete করা সম্ভব না , প্রয়োজনে edit বা inactive করতে পারবেন। তাই অপ্রয়োজনীয় এক্সপেন্স তৈরী থেকে বিরত থাকুন।
                                        </p>
                                    </div>
                                    {/* <hr className="mt-4" /> */}
                                    <div className="flex flex-col md:flex-row justify-between gap-2 px-6 w-full">
                                        <div className="w-[100%]">
                                            {/* Expense Category */}
                                            <div className="mt-2">
                                                <p className="text-lg text-gray-900 dark:text-white">Category Name<span className="text-red-500">(required)</span> </p>
                                                <input
                                                    type="text "
                                                    placeholder="Name "
                                                    className="input input-bordered w-full bg-[#f7f7f7] dark:bg-base-100"
                                                />
                                            </div>


                                        </div>

                                    </div>

                                    {/* button */}
                                    <div className="bg-[#f7f7f7] mt-4 px-6 py-4 border flex gap-2 justify-end dark:bg-gray-500 dark:border-none">
                                        <button className="bg-[#5cb85c] text-lg text-white ml-4 inline-flex justify-center rounded-md border border-transparent  px-4 py-2  font-medium  hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-[#d9534f] inline-flex text-white justify-center rounded-md border border-transparent  px-4 py-2 text-lg font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
        </>
    );
};

export default ExpenseListModal;