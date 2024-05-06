import { useContext, useEffect, useState } from "react";
import Dashboard from "../Components/dashboard/Dashboard";
import { ContextData } from "../Providers/ContextProviders/ContextProviders";
import Navbar from "../Components/dashboard/Navber/Navbar";
import { Outlet } from "react-router-dom";
import TemplateCustomizer from "../Components/dashboard/TemplateCustomizer/TemplateCustomizer";
import { IoSettingsOutline } from "react-icons/io5";
import TopMenu from "../Components/dashboard/TopMenu/TopMenu";
const DashboardLayout = () => {
  //context data
  const {
    setShow,
    show,
    showText,
    openAccordion,
    showProfiePopUp,
    setShowprofilePopUp,
    showSortcutPopUp,
    setshowSortcutPopUp,
    mouseEnterInSIderber,
    setmouseEnterInSIderber,
    setshowNotificationPopUp,
    showNotificationPopUp,
    showThemePopUp,
    setshowThemePopUp,
    showLanguagePopUp,
    setshowLanguagePopUp,
    showSearchOption,
    setshowSearchOption,
    themeChangerOpen,
    setThemeChangerOpen,
    navberType,
    Content,
    semiDark,
    showTopMenu,
  } = useContext(ContextData);
  // close all modal and accordions 
  const handelcloseModals = () => {
    setShow(false)
    setShowprofilePopUp(false)
    setshowSortcutPopUp(false)
    setshowNotificationPopUp(false)
    setshowThemePopUp(false)
    setshowLanguagePopUp(false)
    setshowSearchOption(false)
    setThemeChangerOpen(false)
    // console.log(openAccordion)
  }
  useEffect(() => {
    // get the sideber dive
    const sideber = document.getElementById('sideber')
    //mouse enter function
    const handleMouseEnter = (event) => {
      if (event.target === sideber || sideber.contains(event.target)) {
        setmouseEnterInSIderber(true)
      }
    };
    const handleMouseLeave = (event) => {
      if (event.target === sideber || sideber.contains(event.target)) {
        setmouseEnterInSIderber(false)
      }
    };
    // event listener 
    if (sideber) {
      sideber.addEventListener('mouseenter', handleMouseEnter)
      sideber.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        //remove event listener 
        sideber.removeEventListener('mouseenter', handleMouseEnter);
        sideber.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // animation 
  const [SideberOpenAnimation, setSideberOpenAnimation] = useState(true)
  useEffect(() => {
    if (showText === SideberOpenAnimation) {
      return
    } else {
      setSideberOpenAnimation(showText)
    }
  }, [showText])


  return (
    <>
      <div className="flex justify-between items-start dashboard h-dvh overflow-hidden">
        {/* sideber  dark:bg-[#2F3349] dark:bg-[#25293C] style={{ transition: ".5s" }}*/}
        {
          <>
            <div style={{ boxShadow: '0px 2px 10px .1px black', }} id="sideber"
              className={`sideber ${showText ? `` : `${mouseEnterInSIderber ? `absolute sideber-open` : `sideber-colapsed absolute`}`} z-[5]`}
            >
              <Dashboard />
            </div>
            {!showText && <div className="w-[65px]"></div>}
          </>
        }
        <div style={{ transition: "1s" }} className={` w-[calc(100%-270px)] ml-auto ${showText ? `w-[calc(100%-270px)]` : `w-[calc(100%-65px)]`} h-dvh overflow-hidden`}>
          <div id="contentScrollber" className="px-6">
            <Navbar />
            {/* <Outlet /> */}
          </div>
        </div>
        <TemplateCustomizer />
        <button onClick={() => {
          setThemeChangerOpen(true)
        }} className={`p-2 text-2xl bg-[#8E85F3] ${themeChangerOpen ? 'ThemeChangerTogglerClose' : 'ThemeChangerTogglerOpen'} z-[50] rounded-l-md text-white fixed w-12 flex justify-center items-center h-10 right-3 top-[50%] translate-y-[-50%]`}>
          <IoSettingsOutline />
        </button>
      </div>
      {
        ((!showText && openAccordion.show) || showSortcutPopUp || showProfiePopUp || show || showNotificationPopUp || showThemePopUp || showLanguagePopUp || showSearchOption || themeChangerOpen) && <div onClick={handelcloseModals} className={`showText openAccordion.show show bg-black min-w-full h-screen absolute left-0 top-0 z-[1] bg-opacity-[0] cursor-pointer`}>
        </div>
      }
    </>
  );
};

export default DashboardLayout;
