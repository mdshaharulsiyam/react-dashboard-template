import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { permission } from "../../../Utility/Sideber/permision";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";
import { SIderberNavLinks, SIderberNavLinksbl } from "../../../Utility/Sideber/SIderberNavLinks";
const TopMenu = () => {
    const {
        showText,
        mouseEnterInSIderber,
        language
    } = useContext(ContextData);
    const HaveAcces = permission.map(item => `${item.name}`)
    const [sideBerlink, setSideberLink] = useState([])
    useEffect(() => {
        switch (language) {
            case 'বাংলা':
                setSideberLink(SIderberNavLinksbl)
                break;
            case 'English':
                setSideberLink(SIderberNavLinks)
                break;
            default:
                setSideberLink(SIderberNavLinks)
                break;
        }
    }, [language])
    const location = useLocation()

    //dont show if any dropdown doesnt have any content 
    useEffect(() => {
        const dropDowns = document.querySelectorAll('#dropDowns');
        if (dropDowns) {
            for (const dropDown of dropDowns) {
                // console.log(dropDown);
                const Links = dropDown.querySelectorAll('li');
                Links.length <= 0 && dropDown.parentElement.classList.add('hidden')
            }
        }
    }, []);
    useEffect(() => {
        const dropDownButtons = document.querySelectorAll('#dropDownButton')
        if (dropDownButtons) {
            for (const dropDownButton of dropDownButtons) {
                const isActive = dropDownButton.parentElement.querySelectorAll('#dropDowns .active')

                if (isActive.length > 0) {
                    for (const activeLink of isActive) {
                        activeLink.closest('#dropDowns').parentElement.querySelector('#dropDownButton').classList.add('activeLink')
                    }
                } else {
                    dropDownButton.classList.remove('activeLink')
                }
            }
        }

    }, [location.pathname, showText])

    return (
        <div
            id="dBoardSideber"
            className={` z-[70] xl:block hidden`}>

                {/* logo   */}
                <div id="sideberScrollber"
                    className={` flex justify-start items-center z-[70] bg-white py-2 rounded`}>
                    {/* map over all the menu group  */}
                    {sideBerlink.map((item, index) => (
                        <div className="flex justify-center items-center " key={index}>
                            {/* check is there any title for this menu group or not */}
                            {Array.isArray(item?.NavItems) &&
                                item?.NavItems.map((item, index) =>
                                    item?.link ? ( // checking link // if false this item has dropdown menu
                                        HaveAcces.includes(item.access) && <NavLink
                                            key={index}
                                            to={item.link}
                                            className={`my-[6px] text-[15px]  hover:text-rose-500 dark:hover:text-rose-500 px-3 justify-start text-gray-600 dark:text-gray-100 hover:no-underline  transition-all py-[8px]  font-medium opacity-80  flex  items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                        >
                                            <item.icon className={`text-xl`} />
                                            {/* check show menu text or not if true then mouse entered or not */}
                                            {item?.menu}
                                        </NavLink>
                                    ) : (
                                        // dropdown menus
                                        <div
                                            key={index}
                                            className={` hover:no-underline cursor-pointer flex justify-center  mx-1 items-center`}
                                        >
                                            <li id="dropDownButton"
                                                className={`px-3 dropDownButton relative text-[15px] shrink-0 z-50 hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline transition-all py-[8px]  font-semibold opacity-80 flex items-center gap-2 hover:bg-gray-200 rounded-md my-[2px]`}

                                            >
                                                <span
                                                    className={`flex justify-start items-center gap-1`}
                                                >
                                                    <item.icon className={`text-xl`} />
                                                    {/* check show menu text or not // if true then mouse entered or not  */}
                                                    {item?.menu}
                                                </span>
                                                <IoIosArrowForward
                                                    className={` text-[12px] rotate-[90deg]`}
                                                />

                                                <ul id="dropDowns"
                                                    // check is accordion open or not 
                                                    className={`absolute left-0 hidden bg-white z-70 px-2 min-w-72`}
                                                >
                                                    {Array.isArray(item.dropDown) ? ( // checking is dropdown menus is an array
                                                        <div >
                                                            {item.dropDown.map((dropDownItems, index) => {//map dropdown items
                                                                //check is there any sub dropdown menu avilable or not
                                                                return !dropDownItems.link &&
                                                                    Array.isArray(dropDownItems.subMenu) ? (
                                                                    <div key={index}>
                                                                        <li id="dropDownButton2"
                                                                            className={`relative dropDownButton`}
                                                                            key={index}
                                                                        >
                                                                            <span

                                                                                className={`  my-[6px]  text-[15px]  hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline px-1 transition-all py-2  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                            >
                                                                                <span
                                                                                    className={`flex justify-start w-full items-center gap-1`}
                                                                                >
                                                                                    <dropDownItems.icon className="text-[10px]" />
                                                                                    {dropDownItems?.menu}
                                                                                </span>
                                                                                <IoIosArrowForward
                                                                                    className={` text-[12px] rotate-[90deg]`}
                                                                                />
                                                                            </span>
                                                                            <ul id="dropDowns2"
                                                                                // check is subaccordion menu open or not 
                                                                                className={`  absolute top-0 right-[240px] hidden bg-white z-40 px-2 min-w-72`}
                                                                            >
                                                                                {/* map over all subAccordion menus  */}
                                                                                {dropDownItems.subMenu.map((subMenu, index) => {
                                                                                    return !subMenu.link &&
                                                                                        Array.isArray(subMenu.subMenu2) ? <div key={index}>
                                                                                        <li id="dropDownButton3"

                                                                                            className={`relative dropDownButton`}

                                                                                        >
                                                                                            <span

                                                                                                className={`my-[6px] px-3 text-[15px]  hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline transition-all py-2  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                                            >
                                                                                                <span
                                                                                                    className={`flex justify-start w-full items-center gap-1`}
                                                                                                >
                                                                                                    <dropDownItems.icon className="text-[10px]" />
                                                                                                    {showText ? subMenu?.menu : `${mouseEnterInSIderber ? subMenu?.menu : ""}`}
                                                                                                </span>
                                                                                                <IoIosArrowForward
                                                                                                    className={`transition-all rotate-[90deg]`}
                                                                                                />
                                                                                            </span>
                                                                                            <ul id='dropDowns3'
                                                                                                // check is subaccordion menu open or not 
                                                                                                className={`  absolute top-0 left-[240px] hidden bg-white z-40 px-2 min-w-72`}
                                                                                            >
                                                                                                {subMenu.subMenu2.map((subMenu2, index) => {
                                                                                                    return HaveAcces.includes(subMenu2.access) && <li
                                                                                                        className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                                                                                        key={index}
                                                                                                    >
                                                                                                        <NavLink

                                                                                                            to={subMenu2.link}
                                                                                                            className={`${showText ? 'px-3' : mouseEnterInSIderber ? "px-3" : ''} my-[6px] text-[15px]  hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline px-1 transition-all py-[8px]  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                                                        >
                                                                                                            <subMenu.icon className="text-[10px]" /> {subMenu2.menu}
                                                                                                        </NavLink>
                                                                                                    </li>
                                                                                                }
                                                                                                )}
                                                                                            </ul>
                                                                                        </li>

                                                                                    </div> : HaveAcces.includes(subMenu.access) && <li
                                                                                        className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                                                                        key={index}
                                                                                    >
                                                                                        <NavLink

                                                                                            to={subMenu.link}
                                                                                            className={`${showText ? 'px-3' : mouseEnterInSIderber ? "px-3" : ''} my-[6px] text-[15px]  hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline px-1 transition-all py-[8px]  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                                        >
                                                                                            <subMenu.icon className="text-[10px]" /> {subMenu.menu}
                                                                                        </NavLink>
                                                                                    </li>
                                                                                }
                                                                                )}
                                                                            </ul>
                                                                        </li>

                                                                    </div>
                                                                ) : (//is there is no subAccordion menu then return li 
                                                                    HaveAcces.includes(dropDownItems.access) && <li
                                                                        className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                                                        key={index}
                                                                    >
                                                                        <NavLink

                                                                            to={dropDownItems.link}
                                                                            className={`${showText ? 'px-3' : mouseEnterInSIderber ? "px-3" : ''} my-[6px] text-[15px]  hover:text-rose-500 dark:hover:text-rose-500 text-gray-600  dark:text-gray-100 hover:no-underline px-1 transition-all py-[8px]  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                        >
                                                                            <dropDownItems.icon className="text-[10px]" /> {dropDownItems.menu}
                                                                        </NavLink>
                                                                    </li>
                                                                );
                                                            }
                                                            )}
                                                        </div> //if dropdown menus is not an array then return empty fragment
                                                    ) : (
                                                        <></>
                                                    )}
                                                </ul>
                                            </li>
                                        </div>
                                    )
                                )}
                        </div>
                    ))}
                </div>
        </div >
    );
};
export default TopMenu