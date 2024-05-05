
import { RxCross2 } from "react-icons/rx";
import { FiSun } from "react-icons/fi";
import { PiCloudSunLight } from "react-icons/pi";
import { MdLaptopChromebook } from "react-icons/md";
import Default from '../../../assets/default.svg';
import Default_dark from '../../../assets/default-dark.svg';
import SemiDark from '../../../assets/semi-dark.svg';
import SemiDark_dark from '../../../assets/semi-dark-dark.svg';
import Collapsed from '../../../assets/collapsed.svg';
import Collapsed_dark from '../../../assets/collapsed-dark.svg';
import Expanded from '../../../assets/expanded.svg';
import Expanded_dark from '../../../assets/expanded-dark.svg';
import StickyNav from '../../../assets/sticky.svg';
import StaticNav from '../../../assets/static.svg';
import HiddenNav from '../../../assets/hidden.svg';
import Compact from '../../../assets/compact.svg';
import Wide from '../../../assets/wide.svg';
import TopMenu from '../../../assets/horizontal-fixed.svg';
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";

const TemplateCustomizer = () => {
    const {
        theme,
        themeChangerOpen,
        setThemeChangerOpen,
        setTheme,
        setNavberType,
        setShowText,
        setContent,
        setSemidark,
        setShowTopMenu
    } = useContext(ContextData)
    const [ThemeChangeData, setThemeChangeData] = useState({
        theme: '',
        navberType: '',
        showText: true,
        Content: false,
        semiDark: false,
        showTopMenu: false
    })
    const [themeChack, setthemeChack] = useState(window.matchMedia('(prefers-color-scheme: dark)'))
    useEffect(() => {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
        setthemeChack(darkModeQuery)
    }, [theme])
    const applyChanges = () => {
        setNavberType(ThemeChangeData.navberType)
        setShowText(ThemeChangeData.showText)
        setContent(ThemeChangeData.Content)
        setTheme(ThemeChangeData.theme)
        setSemidark(ThemeChangeData.semiDark)
        setShowTopMenu(ThemeChangeData.showTopMenu)
    }
    const resetChanges = () => {
        setNavberType('sticky')
        setShowText(true)
        setContent(false)
        setTheme('system')
        setSemidark(false)
        setShowTopMenu(false)
    }
    return (
        <div id="themeChangerParent" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className={`sm:w-[400px] w-[300px] top-0 ${themeChangerOpen ? 'right-0 ThemeChangerOpen' : '-right-[400px] ThemeChangerClose'} themeChanger h-screen min-h-screen  bg-white absolute z-[60] dark:bg-[#2F3349] dark:text-gray-300`}>
            <div className="border-b">
                <div className="grid grid-cols-6 justify-between items-start p-4 px-[26px] opacity-90 ">
                    <span className="col-span-5">
                        <h4 className="text-xl font-semibold tracking-wide dark:text-[#CBCFE9]">Template Customizer</h4>
                        <p className="text-[15px] font-medium -mt-2 tracking-wide">Customize and preview in real time</p>
                    </span>
                    <span className="flex justify-around items-center text-xl pt-3">
                        <button onClick={() => setThemeChangerOpen(false)}>
                            <RxCross2 />
                        </button>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-3 justify-between items-center mx-7 ">
                    <button onClick={resetChanges} className="text-[#EAE8FD] w-full  bg-red-500 p-2 hover:scale-105 active:scale-95 transition-all rounded-sm mb-4">
                        Reset Changes
                    </button>
                    <button onClick={applyChanges} className="text-[#EAE8FD] w-full  bg-[#8E85F3] p-2 hover:scale-105 active:scale-95 transition-all rounded-sm  mb-4">
                        Apply Changes
                    </button>
                </div>
            </div>
            <div id="themeChanger" className="overflow-y-scroll lg:h-[85dvh] h-[83dvh]">
                <div className="px-[26px]">

                    <button className="button">Theming</button>
                    <h5 className="py-0 my-0 mt-1 mb-1 dark:text-gray-300">Style (Mode)</h5>
                    <span className="grid grid-cols-3 gap-6 pt-2">
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                theme: 'light'
                            })
                            // setTheme('light')
                        }} className="cursor-pointer">
                            <button className={`border flex justify-center ${ThemeChangeData.theme === 'light' ? 'border-[#8E85F3]' : ''} items-center py-4 text-2xl rounded-md w-full mb-[2px]`}>
                                <FiSun />
                            </button >
                            Light
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                theme: 'dark'
                            })
                            // setTheme('dark')
                        }} className="cursor-pointer">
                            <button className={`border flex justify-center ${ThemeChangeData.theme === 'dark' ? 'border-[#8E85F3]' : ''} items-center py-4 text-2xl rounded-md w-full mb-[2px]`}>
                                <PiCloudSunLight />
                            </button>
                            Dark
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                theme: 'system'
                            })
                            // setTheme('system')
                        }} className="cursor-pointer">
                            <button className={`border flex justify-center ${ThemeChangeData.theme === 'system' ? 'border-[#8E85F3]' : ''} items-center py-4 text-2xl rounded-md w-full mb-[2px]`}>
                                <MdLaptopChromebook />
                            </button>
                            System
                        </span>
                    </span>
                    <h5 className="py-0 my-0 mt-4 mb-1 dark:text-gray-300">Themes</h5>
                    <span className="grid grid-cols-3 gap-6 pt-2">
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                semiDark: false
                            })
                        }} className="cursor-pointer">
                            <div className={`border ${ThemeChangeData.semiDark ? '' : 'border-[#8E85F3]'} rounded-md mb-[2px]`}>
                                <img src={theme === 'dark' || themeChack.matches ? Default_dark : Default} className=" rounded-md w-full" />
                            </div>
                            Default
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                semiDark: true
                            })
                        }} className="cursor-pointer">
                            <div className={`border ${ThemeChangeData.semiDark ? 'border-[#8E85F3]' : ''} rounded-md mb-[2px]`}>
                                <img src={theme === 'dark' || themeChack.matches ? SemiDark_dark : SemiDark} className=" rounded-md w-full" />
                            </div>
                            Semi Dark
                        </span>
                    </span>
                </div>
                <hr className="w-full  my-6 mb-2" />
                <div className="px-[26px]">
                    <button className="button">Layout</button>
                    <h5 className="py-0 my-0 mt-1 mb-1 lg:block hidden dark:text-gray-300">Menu (Navigation)</h5>
                    <span className="lg:grid hidden grid-cols-3 gap-6 pt-2 ">
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                showText: true
                            })
                            // setShowText(true)
                        }} className="cursor-pointer">
                            <div className={`border rounded-md ${ThemeChangeData.showText ? 'border-[#8E85F3]' : ''} mb-[2px]`}>
                                <img src={theme === 'dark' || themeChack.matches ? Expanded_dark : Expanded} className=" rounded-md w-full" />
                            </div>
                            Expanded
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                showText: false
                            })
                            // setShowText(false)
                        }} className="cursor-pointer">
                            <div className={`border ${ThemeChangeData.showText ? '' : 'border-[#8E85F3] '} rounded-md mb-[2px]`}>
                                <img src={theme === 'dark' || themeChack.matches ? Collapsed_dark : Collapsed} className=" rounded-md w-full" />
                            </div>
                            Collapsed
                        </span>
                    </span>
                    <h5 className="py-0 my-0 mt-3 mb-1 dark:text-gray-300 lg:block hidden">Menu (Style)</h5>
                    <span className="lg:grid hidden grid-cols-3 gap-6 pt-2">
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                showTopMenu: true
                            })
                            // setShowText(true)
                        }} className="cursor-pointer">
                            <div className={`border rounded-md ${ThemeChangeData.showTopMenu ? 'border-[#8E85F3]' : ''} mb-[2px]`}>
                                <img src={theme === 'dark' || themeChack.matches ? TopMenu : TopMenu} className=" rounded-md w-full" />
                            </div>
                            Top menu
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                showTopMenu: false
                            })
                            // setShowText(false)
                        }} className="cursor-pointer">
                            <div className={`border ${ThemeChangeData.showTopMenu ? '' : 'border-[#8E85F3] '} rounded-md mb-[2px]`}>
                                <img src={theme === 'dark' || themeChack.matches ? Expanded_dark : Expanded_dark} className=" rounded-md w-full" />
                            </div>
                            Sideber
                        </span>
                    </span>
                    <h5 className="py-0 my-0 mt-4 mb-1 dark:text-gray-300">Navbar Type  </h5>
                    <span className="grid grid-cols-3 gap-6 pt-2">
                        <span onClick={() => {

                            setThemeChangeData({
                                ...ThemeChangeData,
                                navberType: 'sticky'
                            })
                            // setNavberType('sticky')

                        }} className="cursor-pointer">
                            <div className={`border rounded-md mb-[2px] ${ThemeChangeData.navberType === 'sticky' ? 'border-[#8E85F3]' : ''}`}>
                                <img src={StickyNav} className=" rounded-md w-full" />
                            </div>
                            Sticky
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                navberType: 'static'
                            })
                            // setNavberType('static')
                        }} className="cursor-pointer">
                            <div className={`border rounded-md mb-[2px] ${ThemeChangeData.navberType === 'static' ? 'border-[#8E85F3]' : ''}`}>
                                <img src={StaticNav} className=" rounded-md w-full" />
                            </div>
                            Static
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                navberType: 'hidden'
                            })
                            // setNavberType('hidden')
                        }} className="cursor-pointer">
                            <div className={`border rounded-md mb-[2px] ${ThemeChangeData.navberType === 'hidden' ? 'border-[#8E85F3]' : ''}`}>
                                <img src={HiddenNav} className=" rounded-md w-full" />
                            </div>
                            Hidden
                        </span>
                    </span>
                    <h5 className="py-0 my-0 mt-4 mb-1 dark:text-gray-300">Content</h5>
                    <span className="grid grid-cols-3 gap-6 pt-2">
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                Content: true
                            })
                            // setContent(true)
                        }} className="cursor-pointer">

                            <div className={`border ${ThemeChangeData.Content ? 'border-[#8E85F3]' : ''} rounded-md mb-[2px]`}>
                                <img src={Compact} className=" rounded-md w-full" />
                            </div>
                            Compact
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                Content: false
                            })
                            // setContent(false)
                        }} className="cursor-pointer">
                            <div className={`border ${ThemeChangeData.Content ? '' : 'border-[#8E85F3]'} rounded-md mb-[2px]`}>
                                <img src={Wide} className=" rounded-md w-full" />
                            </div>
                            Wide
                        </span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default TemplateCustomizer