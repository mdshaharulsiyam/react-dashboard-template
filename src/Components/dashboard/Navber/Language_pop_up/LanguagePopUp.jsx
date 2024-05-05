import React, { useContext, useEffect } from 'react'
import { LanguagePopUpOptions } from '../../../../Utility/Navber/Language_pop_up_options/LanguagePopUpOptions'
import { ContextData } from '../../../../Providers/ContextProviders/ContextProviders'

const LanguagePopUp = ({ showLanguagePopUp, setshowLanguagePopUp }) => {
    const { language,
        setLanguage } = useContext(ContextData)
    useEffect(() => {
        switch (language) {
            case 'বাংলা':
                localStorage.setItem('language', 'বাংলা')
                break;
            case 'English':
                localStorage.setItem('language', 'English')
                break;
            default:
                localStorage.setItem('language', 'english')
                break;
        }
    }, [language])
    return (//${showLanguagePopUp ? "popup" : "hidden"}
        <div className={` ${showLanguagePopUp ? "popup" : "hidden"} dark:bg-[#2F3249] dark:border-none dark:text-gray-300 py-4 shadow mt-10 rounded box-border border absolute md:right-44 z-10 sm:right-28 right-[2%] sm:-top-12 -top-8 bg-white  min-w-[96%] max-w-[96%] sm:max-w-4min-w-40 sm:min-w-40`}>
            <div className='px-4 '>
                {
                    LanguagePopUpOptions.map((item, index) =>
                        <button key={index} onClick={() => {
                            setLanguage(item)
                            setshowLanguagePopUp(false)
                        }} className={`${language===item?'bg-[#978EF4] text-white':''} w-full dark:text-gray-300 flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 dark:hover:bg-slate-500 p-2 px-3 my-1 rounded-md transition-all`}>
                            {item}
                        </button>)
                }
            </div>

        </div>
    )
}
export default LanguagePopUp