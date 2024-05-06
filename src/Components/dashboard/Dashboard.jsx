import Logo from "./Logo/Logo";
import "./scrollbar.css";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import "../../CSS/customCSS.css";
import { NavLink, useLocation } from "react-router-dom";
import { SIderberNavLinks, SIderberNavLinksbl } from "../../Utility/Sideber/SIderberNavLinks";
import { IoIosArrowForward } from "react-icons/io";
import { permission } from "../../Utility/Sideber/permision";

const Dashboard = () => {
  const {
    setShow,
    show,
    showText,
    setShowText,
    setOpenAccordion,
    mouseEnterInSIderber,
    openAccordion,
    openSubMenuAccordion,
    setOpenSubMenuAccordion,
    openSubMenuAccordion2,
    setOpenSubMenuAccordion2,
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
  // SIderberNavLinksbl
  // console.log(HaveAcces)
  const location = useLocation()

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowText(true);
    });
  }, []);
  //accordian open function
  const HandelAccorDionOpen = (name) => {
    if (openAccordion.name !== name) {
      setOpenAccordion({
        prev: openAccordion.name,
        prevOpen: openAccordion.show,
        name: name,
        show: true,
      });
    } else {
      setOpenAccordion({
        prev: false,
        prevOpen: false,
        name: name,
        show: !openAccordion.show,
      });
    }
  };

  //submenu accordion open function
  const handelSubMenuAccordion = (name) => {
    if (openSubMenuAccordion.subMenu !== name) {
      setOpenSubMenuAccordion({
        prevSubMenu: openSubMenuAccordion.name,
        prevSubMenuOpen: openSubMenuAccordion.subMenuOpen,
        subMenu: name,
        subMenuOpen: true,
      });
    } else {
      setOpenSubMenuAccordion({
        prevSubMenu: false,
        prevSubMenuOpen: false,
        subMenu: name,
        subMenuOpen: !openSubMenuAccordion.subMenuOpen,
      });
    }
  };
  // console.log(openSubMenuAccordion)
  const handelSubMenuAccordion2 = (name) => {
    // console.log(openSubMenuAccordion)
    if (openSubMenuAccordion2.subMenu !== name) {
      setOpenSubMenuAccordion2({
        prevSubMenu: openSubMenuAccordion2.name,
        prevSubMenuOpen: openSubMenuAccordion2.subMenuOpen,
        subMenu: name,
        subMenuOpen: true,
      });
    } else {
      setOpenSubMenuAccordion2({
        prevSubMenu: false,
        prevSubMenuOpen: false,
        subMenu: name,
        subMenuOpen: !openSubMenuAccordion2.subMenuOpen,
      });
    }
  };
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

  }, [location.pathname, showText, mouseEnterInSIderber])
  return (
    <div id="dBoardSideber" className={`dark:bg-[#2F3249] dark:text-gray-300`}>
      <div id="sideberScrollber" className={` px-3`}>
        <Logo show={show} setShow={setShow} />
        {sideBerlink.map((item, index) => (
          <div key={index}>
            {item?.title && ( //titles
              <p className={`pl-3`}>
                {showText ? item?.title : `${mouseEnterInSIderber ? item?.title : "__"}`}
              </p>
            )}
            {Array.isArray(item?.NavItems) &&
              item?.NavItems.map((item, index) =>
                item?.link ? ( //menu navlink
                  HaveAcces.includes(item.access) && <NavLink key={index} to={item.link} className={`menu-item relative`} >
                    <item.icon className={`menu-icon`} />
                    <p className={`${showText?``:`${mouseEnterInSIderber?'text-open':''}`}`}>{showText ? item?.menu : `${mouseEnterInSIderber ? item?.menu : ""}`}</p>
                  </NavLink>
                ) : (
                  <div key={index} className={``} >
                    <li id="dropDownButton" //dropdown parent
                      onClick={() => HandelAccorDionOpen(item?.menu)} className={``} >
                      <span className={`menu-item relative`}  >
                        <item.icon className={`menu-icon`} />
                        <p className={`${showText?``:`${mouseEnterInSIderber?'text-open':''}`}`}>{showText ? item?.menu : `${mouseEnterInSIderber ? item?.menu : ""}`}</p>
                      </span>
                      <IoIosArrowForward className={`hidden`} />
                    </li>
                    <ul style={{ transition: '1s' }} id="dropDowns" className={`dropdown-menu-parent ${openAccordion.show && openAccordion.name === item?.menu ? "dropdown-menu-show  accordionOpen" : "  "} ${(openAccordion.prev === item?.menu && openAccordion.prevOpen) || (!openAccordion.show && openAccordion.name === item?.menu) ? "accordionClose" : ""}`} >
                      {Array.isArray(item.dropDown) ? ( // checking is dropdown menus is an array
                        <div >
                          {item.dropDown.map((dropDownItems, index) => {
                            return !dropDownItems.link &&
                              Array.isArray(dropDownItems.subMenu) ? (
                              <div key={index}>
                                {/* submenu dropdown button  */}
                                <li id="dropDownButton" onClick={() => {
                                  handelSubMenuAccordion(dropDownItems.menu);
                                }} className={``} key={index}>
                                  <span className={``}>
                                    <span className={`menu-item relative`}>
                                      <dropDownItems.icon className="dropdown-menu" />
                                      <p className={`${showText?``:`${mouseEnterInSIderber?'text-open':''}`}`}>{showText ? dropDownItems?.menu : `${mouseEnterInSIderber ? dropDownItems?.menu : ""}`}</p>
                                    </span>
                                    <IoIosArrowForward className={`hidden`} />
                                  </span>
                                </li>
                                <ul className={`dropdown-menu-parent  ${openSubMenuAccordion.subMenuOpen && openSubMenuAccordion.subMenu === dropDownItems?.menu ? "dropdown-menu-show accordionOpen" : " "} ${(openSubMenuAccordion.prevSubMenu === dropDownItems?.menu && openSubMenuAccordion.prevSubMenuOpen) || (!openSubMenuAccordion.subMenuOpen && openSubMenuAccordion.subMenu === dropDownItems?.menu) ? "accordionClose" : ""}`} >
                                  {dropDownItems.subMenu.map((subMenu, index) => {
                                    return !subMenu.link &&
                                      Array.isArray(subMenu.subMenu2) ? <div key={index}>
                                      <li id="dropDownButton" //submenu 2 dropdown button
                                        onClick={() => {
                                          handelSubMenuAccordion2(subMenu.menu);
                                        }} className={``}  >
                                        <span className={``} >
                                          <span className={`menu-item relative`} >
                                            <dropDownItems.icon className="dropdown-menu" />
                                            <p className={`${showText?``:`${mouseEnterInSIderber?'text-open':''}`}`}>{showText ? subMenu?.menu : `${mouseEnterInSIderber ? subMenu?.menu : ""}`}</p>
                                          </span>
                                          <IoIosArrowForward className={`hidden`} />
                                        </span>
                                      </li>
                                      <ul className={`dropdown-menu-parent ${openSubMenuAccordion2.subMenuOpen && openSubMenuAccordion2.subMenu === subMenu?.menu ? "dropdown-menu-show accordionOpen" : " "} ${(openSubMenuAccordion2.prevSubMenu === subMenu?.menu && openSubMenuAccordion2.prevSubMenuOpen) || (!openSubMenuAccordion2.subMenuOpen && openSubMenuAccordion2.subMenu === subMenu?.menu) ? "accordionClose" : ""}`} >
                                        {subMenu.subMenu2.map((subMenu2, index) => {
                                          return HaveAcces.includes(subMenu2.access) && <li className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`} key={index} >
                                            {/* submenu 2 navlink  */}
                                            <NavLink to={subMenu2.link} className={`menu-item relative`} >
                                              <subMenu.icon className="dropdown-menu" /> 
                                              <p className={`${showText?``:`${mouseEnterInSIderber?'text-open':''}`}`}> {showText ? subMenu2.menu : `${mouseEnterInSIderber ? subMenu2.menu : ""}`}</p>
                                            </NavLink>
                                          </li>
                                        }
                                        )}
                                      </ul>
                                    </div> : HaveAcces.includes(subMenu.access) && <li className={``} key={index} >
                                      {/* submenu navlink  */}
                                      <NavLink to={subMenu.link} className={`menu-item relative`} >
                                        <subMenu.icon className="dropdown-menu" /> 
                                        <p className={`${showText?``:`${mouseEnterInSIderber?'text-open':''}`}`}>{showText ? subMenu.menu : `${mouseEnterInSIderber ? subMenu.menu : ""}`}</p>
                                      </NavLink>
                                    </li>
                                  }
                                  )}
                                </ul>
                              </div>
                            ) : (
                              HaveAcces.includes(dropDownItems.access) && <li className={``} key={index} >
                                {/* dropdown  navlink  */}
                                <NavLink to={dropDownItems.link} className={`menu-item relative`}  >
                                  <dropDownItems.icon className="dropdown-menu" /> 
                                  <p className={`${showText?``:`${mouseEnterInSIderber?'text-open':''}`}`}>{showText ? dropDownItems.menu : `${mouseEnterInSIderber ? dropDownItems.menu : ""}`}</p>
                                </NavLink>
                              </li>
                            );
                          }
                          )}
                        </div>
                      ) : (
                        <></>
                      )}
                    </ul>
                  </div>
                )
              )}
          </div>
        ))}
      </div>
    </div >
  );
};

export default Dashboard;