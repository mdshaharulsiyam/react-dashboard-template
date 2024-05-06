import { IoIosMenu } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import avater from "../../../assets/avator.jpg";
import ProfilePopUp from "./profile_pop_up/ProfilePopUp";
import { useContext, useEffect } from "react";
import ShortcutPopUp from "./Shortcut_pop_up/ShortcutPopUp";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";
import { BiCustomize } from "react-icons/bi";
import NotificationPopUp from "./Notification_pop_up/NotificationPopUp";
import ThemePopUp from "./Theme_pop_up/ThemePopUp";
import { IoLanguageOutline, IoSearchOutline } from "react-icons/io5";
import LanguagePopUp from "./Language_pop_up/LanguagePopUp";
import { RxCross1 } from "react-icons/rx";
import { CiMonitor } from 'react-icons/ci'
import { HiOutlineSun } from 'react-icons/hi'
import { IoMoonOutline } from 'react-icons/io5'
const Navbar = () => {
  // states
  const {
    setShow,
    setShowText,
    showProfiePopUp,
    setShowprofilePopUp,
    showSortcutPopUp,
    setshowSortcutPopUp,
    showNotificationPopUp,
    setshowNotificationPopUp,
    showThemePopUp,
    setshowThemePopUp,
    showLanguagePopUp,
    setshowLanguagePopUp,
    showSearchOption,
    setshowSearchOption,
    theme,
    setShowTopMenu
  } = useContext(ContextData);
  const search = document.getElementById('search')
  //open search option
  const handelOpenSearchInput = () => {
    setshowSearchOption(true)
    search.focus()
  }
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Ctrl key and forward slash key are pressed at once
      if (event.ctrlKey && (event.key === '/' || event.keyCode === 191)) {
        handelOpenSearchInput();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div style={{ boxShadow: '0 -1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1)' }} className="flex bg-white dark:bg-[#2F3249] rounded-md justify-between items-center w-full mx-auto box-border px-2 sm:px-4 md:px-6  py-4  relative">
        {showSearchOption &&
          <div className="w-full h-full absolute rounded-md bg-white dark:bg-[#2F3249]  top-0 left-0 flex justify-start items-center gap-1 box-border px-6 z-10">
            <input id="search" type="text" name="search" placeholder=" Search..." className="font-semibold dark:text-gray-300 bg-transparent text-base opacity-65 tracking-wider outline-none focus:border-0 focus:outline-none border-0 w-full" />
            <RxCross1 onClick={() => setshowSearchOption(false)} className="cursor-pointer dark:text-gray-300" />
          </div>
        }
        <div className="flex justify-start items-center gap-4">
          <IoIosMenu
            onClick={() => {
              setShowTopMenu(false)
              setShow(true);
              setShowText(true);
            }}
            className="text-3xl lg:hidden block text-gray-600 dark:text-gray-100 mt-1 cursor-pointer z-[5]"
          />
          <button onClick={() => handelOpenSearchInput()} className="text-2xl flex justify-start items-center gap-2 z-[5]">
            <IoSearchOutline className="dark:text-gray-300 z-[5]" /> <span className="text-base font-semibold md:block hidden dark:text-[#6B74A6] text-gray-500 opacity-70">Search (ctrl + /)</span>
          </button>
        </div>
        <div className="flex justify-end items-center gap-4 ">
          <IoLanguageOutline onClick={() => {
            setShowprofilePopUp(false);
            setshowNotificationPopUp(false)
            setshowSortcutPopUp(false);
            setshowThemePopUp(false)
            setshowLanguagePopUp(!showLanguagePopUp)
          }} className="text-2xl text-gray-600 dark:text-gray-300  mt-1 cursor-pointer z-[5]" />
          <button onClick={() => {
            setShowprofilePopUp(false);
            setshowNotificationPopUp(false)
            setshowSortcutPopUp(false);
            setshowLanguagePopUp(false)
            setshowThemePopUp(!showThemePopUp)
          }} className="text-2xl text-gray-600 dark:text-gray-300 mt-1 cursor-pointer z-[5]" >
            {theme === 'light' ? <HiOutlineSun /> : theme === 'dark' ? <IoMoonOutline /> : <CiMonitor />}

          </button>
          <BiCustomize
            onClick={() => {
              setShowprofilePopUp(false);
              setshowNotificationPopUp(false)
              setshowThemePopUp(false)
              setshowLanguagePopUp(false)
              setshowSortcutPopUp(!showSortcutPopUp);
            }}
            className="text-2xl text-gray-600 dark:text-gray-300 mt-1 cursor-pointer z-[5]"
          />
          <FaRegBell onClick={() => {
            setshowSortcutPopUp(false);
            setShowprofilePopUp(false);
            setshowThemePopUp(false)
            setshowLanguagePopUp(false)
            setshowNotificationPopUp(!showNotificationPopUp)
          }} className="text-2xl text-gray-600 dark:text-gray-300 mt-1 cursor-pointer z-[5]" />
          <img
            onClick={() => {
              setshowSortcutPopUp(false);
              setshowNotificationPopUp(false)
              setshowThemePopUp(false)
              setshowLanguagePopUp(false)
              setShowprofilePopUp(!showProfiePopUp);
            }}
            className="md:w-8 md:h-8 h-7 w-7 rounded-full cursor-pointer z-[5]"
            src={avater}
            alt="profile pic"
          />
        </div>
      </div>
      <div className=" w-full  mx-auto box-border px-8 relative">
        <ProfilePopUp showProfiePopUp={showProfiePopUp} setShowprofilePopUp={setShowprofilePopUp} />
        <ShortcutPopUp showSortcutPopUp={showSortcutPopUp} setshowSortcutPopUp={setshowSortcutPopUp} />
        <NotificationPopUp showNotificationPopUp={showNotificationPopUp} />
        <ThemePopUp showThemePopUp={showThemePopUp} setshowThemePopUp={setshowThemePopUp} />
        <LanguagePopUp showLanguagePopUp={showLanguagePopUp} setshowLanguagePopUp={setshowLanguagePopUp} />
      </div>
    </>
  );
};

export default Navbar;
