
import { BiCustomize } from "react-icons/bi";;
import { ShortcutPopUpMenu } from "../../../../Utility/Navber/Shortcut_pop_up_menus/ShortcutPopUpMenus";
const ShortcutPopUp = ({ showSortcutPopUp, setshowSortcutPopUp }) => {

    return (
        <div  className={`absolute rounded-lg border lg:right-24 md:right-20 right-[2%] z-20 sm:-top-12 -top-8  overflow-hidden mt-10 bg-white ${showSortcutPopUp ? "popup" : "hidden"} sm:max-h-[90vh] overflow-y-hidden min-w-[96%] max-w-[96%] sm:max-w-80 sm:min-w-80 dark:bg-[#2F3249] dark:border-none dark:text-gray-300`}>
            <span className='flex justify-between items-center dark:text-gray-300 text-lg p-3 text-gray-600 font-semibold opacity-70'>
                Shortcuts
                <button>
                    <BiCustomize className='text-2xl' />
                </button>
            </span>
            <div id="NotificationPopUp" className='grid grid-cols-2 gap-0 justify-center overflow-y-scroll items-center text-gray-500 mt-2 sm:max-h-[311px] max-h-[407px]'>
                {
                    ShortcutPopUpMenu.map((item, index) =>
                        <button onClick={() => setshowSortcutPopUp(false)} key={index} className='flex justify-center items-center font-semibold flex-col border dark:border-none sm:py-2 py-6 gap-1 tracking-[.8px] hover:bg-slate-100 dark:hover:bg-slate-600 dark:text-gray-300 transition-all text-sm'>
                            <span className="bg-[#EBEAEC] dark:bg-[#25293C] rounded-full  p-3">
                                <item.icon className='text-xl ' />
                            </span>
                            {item.title}
                            <span className="-mt-[6px] font-normal block opacity-70">{item?.subTitle}</span>
                        </button>)
                }
            </div>
        </div>
    )
}

export default ShortcutPopUp
