import { CiCalendarDate, CiLock, CiSettings } from "react-icons/ci";
import { FaRegSquare } from "react-icons/fa6";
import { HiOutlineChartBar } from "react-icons/hi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";

export const ShortcutPopUpMenu = [
    {
        title: 'Calendar',
        subTitle: 'Appointments',
        icon: CiCalendarDate,
    },
    {
        title: 'Invoice App',
        subTitle: 'Manage Accounts',
        icon: TbFileInvoice,
    },
    {
        title: 'User App',
        subTitle: 'Manage Users',
        icon: LuUsers ,
    },
    {
        title: 'Role Management',
        subTitle: 'permission',
        icon: CiLock ,
    },
    {
        title: 'Dashboard',
        subTitle: 'User Profile',
        icon: HiOutlineChartBar  ,
    },
    {
        title: 'Setting',
        subTitle: 'Account Settings',
        icon: CiSettings   ,
    },
    {
        title: 'FAQs',
        subTitle: 'FAQs & Articles',
        icon: IoMdHelpCircleOutline   ,
    },
    {
        title: 'Modals',
        subTitle: 'Useful Popups',
        icon: FaRegSquare    ,
    },
]