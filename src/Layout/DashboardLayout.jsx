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
    <div className="flex justify-between items-start dashboard h-dvh overflow-hidden">
      {/* sideber  dark:bg-[#2F3349] dark:bg-[#25293C] style={{ transition: ".5s" }}*/}
      {
        <>
          <div style={{ boxShadow: '0px 2px 10px .1px black', }} id="sideber"
            className={`sideber ${showText ? `` : `${mouseEnterInSIderber ? `absolute sideber-open` : `sideber-colapsed absolute`}`}`}
          >
            <Dashboard />
          </div>
          {!showText && <div className="w-[65px]"></div>}
        </>
      }
      <div style={{ transition: "1s" }} className={` z-[9] w-[calc(100%-270px)] ml-auto ${showText ? `w-[calc(100%-270px)]` : `w-[calc(100%-65px)]`} h-dvh overflow-hidden`}>
        <div id="contentScrollber" className="px-6">
          <Navbar />
          {/* <Outlet /> */}
        </div>
      </div>
      <TemplateCustomizer />
      <button onClick={() => {
        setThemeChangerOpen(true)
      }} className={``}>
        <IoSettingsOutline />
      </button>
    </div>
  );
};

export default DashboardLayout;
