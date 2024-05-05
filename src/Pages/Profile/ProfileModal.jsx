/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";


const ProfileModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animate, setAnimate] = useState(false)

    const handleAnimate = () => {
        setAnimate(true)

        setTimeout(() => {
            setAnimate(false)
        }, 1000);
    }

    return (
        <>
            <div className="h-[60px] py-2 border-t w-full text-center dark:rounded-sm dark:border-none bg-[#f7f7fa] dark:bg-gray-500">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="w-[90%] h-[100%] border bg-[#7367F0] text-white rounded-lg dark:border-none dark:text-white"
                >
                    Password change
                </button>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className={`relative z-50`} onClose={handleAnimate} >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25"  />
                        </Transition.Child>
                        <div className={`fixed inset-0 overflow-y-auto ${animate ? 'scale-animation': ''}`}>
                            <div className="flex min-h-full items-center justify-center text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition-opacity duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Panel className="w-[96%] md:w-[90%] lg:w-[75%]  xl:w-[910px] max-w-md:w-[60%] transform overflow-hidden rounded-2xl bg-white dark:bg-[#25293C] text-left align-middle shadow-xl transition-all my-10">
                                        <Dialog.Title
                                            as="h3"
                                            className="border py-4 pl-4 font-bold text-xl leading- text-gray-900 dark:bg-gray-500 bg-[#f7f7f7] dark:border-none "
                                        >
                                            <div className="flex justify-between items-center gap-2 pr-6 ">
                                                <h1 className="#212529 font-serif text-normal md:text-xl dark:text-white">Password Update</h1>
                                                <button onClick={() => setIsOpen(false)} className="close-button dark:text-white">X</button>
                                            </div>
                                        </Dialog.Title>
                                        {/*Old Password */}
                                        <div className="mt-2 md:w-full px-6">
                                            <p className="text-lg text-gray-900 dark:text-white">Old Password<span className="text-red-500">(required)</span> </p>
                                            <input
                                                type="text "
                                                placeholder="old Password  "
                                                className="input input-bordered w-full dark:bg-base-100 bg-[#f7f7fa]"
                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between gap-2 px-6">
                                            {/* New Password  */}
                                            <div className="mt-2 md:w-[50%]">
                                                <p className="text-lg text-gray-900 dark:text-white">New Password <span className="text-red-500">(required)</span> </p>
                                                <input
                                                    type="text "
                                                    placeholder="New Password  "
                                                    className="input input-bordered w-full bg-[#f7f7fa] dark:bg-base-100"
                                                />
                                            </div>
                                            {/* Confirm Password  */}
                                            <div className="mt-2 md:w-[50%]">
                                                <p className="text-lg text-gray-900 dark:text-white">Confirm Password <span className="text-red-500">(required)</span></p>
                                                <input
                                                    type="text"
                                                    placeholder="Confirm Password "
                                                    className="input input-bordered w-full dark:bg-base-100 bg-[#f7f7fa]"
                                                />
                                            </div>
                                        </div>
                                        <div className="bg-[#f7f7f7] mt-4 px-6 py-4 border flex gap-2 justify-end dark:bg-gray-500 dark:border-none">
                                            <button className="bg-[#5cb85c] text-lg text-white ml-4 inline-flex justify-center rounded-md border border-transparent  px-4 py-2  font-medium   focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2">
                                                Update
                                            </button>
                                            <button
                                                type="button"
                                                className="bg-[#d9534f] inline-flex text-white justify-center rounded-md border border-transparent  px-4 py-2 text-lg font-medium  focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
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

export default ProfileModal;