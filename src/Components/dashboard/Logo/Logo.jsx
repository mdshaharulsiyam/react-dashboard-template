import { useContext } from "react";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import logo from '../../../assets/Cool-Logo-PNG.png'
import Shortlogo from '../../../assets/Shortlogo.png'
const Logo = ({ show, setShow }) => {
    const { showText, setShowText, mouseEnterInSIderber, setmouseEnterInSIderber } = useContext(ContextData)
    return (
        <div className={`relative`}>
            <div className={`flex justify-start items-center gap-2`}>
                <img className="w-10 h-14 " src={logo} alt="" /><p className={`text-3xl font-bold uppercase ${showText?``:`${mouseEnterInSIderber?'text-open':''}`}`}>{showText ? 'siyam': `${mouseEnterInSIderber ? 'siyam' : ""}`}</p>
            </div>
            <button onClick={() => {
                setShowText(!showText)
                setTimeout(() => {
                    setmouseEnterInSIderber(false)
                }, 100);
            }} className={`text-xl absolute right-0 top-0 ${!mouseEnterInSIderber && !showText ? 'hidden' : 'lg:block hidden'} mt-2 dark:text-white ml-2`}>
                {
                    showText ? <FaRegCircle /> : <FaRegDotCircle />
                }
            </button>
            <button
                onClick={() => {
                    setShow(!show)
                }
                }
                className=" mt-2 cursor-pointer text-xl rounded-full block lg:hidden"
            >
                <RxCross2 />
            </button>
        </div>
    );
};

export default Logo;