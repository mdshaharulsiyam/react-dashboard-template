import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import BtnWithIcon from '../Btn/BtnWithIcon'
import { CiCalendar } from "react-icons/ci";
import { Calendar } from 'primereact/calendar';
import Btn from '../Btn/Btn';

export default function FilterDropdown() {
    const [sDate, setSDate] = useState(null);
    const [eDate, setEDate] = useState(null);

    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <BtnWithIcon icon={<CiCalendar />} text='Filter Date' />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute p-2 z-50 right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="">
                            <div className="">
                                <label
                                    htmlFor="buttondisplay"
                                    className="font-bold block mb-2 text-black dark:text-white"
                                >
                                    Start Date
                                </label>
                                <Calendar
                                    id="buttondisplay"
                                    className="border border-gray-400 dark:border-black dark:bg-base-100 rounded-sm pl-5 pr-2 py-2"
                                    placeholder=""
                                    value={sDate}
                                    // onChange={(e) => setDate(e.value)}
                                    showIcon
                                />
                            </div>
                            <div className="">
                                <label
                                    htmlFor="buttondisplay"
                                    className="font-bold block mb-2 text-black dark:text-white"
                                >
                                    End Date
                                </label>
                                <Calendar
                                    id="buttondisplay"
                                    className="border border-gray-400 dark:border-black dark:bg-base-100 rounded-sm pl-5 pr-2 py-2"
                                    placeholder=""
                                    value={eDate}
                                    // onChange={(e) => setDate(e.value)}
                                    showIcon
                                />
                            </div>
                            <div className="mt-2">
                                <Btn text='Search' />
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

