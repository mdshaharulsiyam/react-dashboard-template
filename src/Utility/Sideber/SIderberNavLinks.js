import { RiHomeSmile2Line, RiPagesLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import {  MdOutlineDashboard, MdOutlineLocalMall, MdOutlineMedicalInformation } from "react-icons/md";
import { TbUserCheck } from "react-icons/tb";
import {  IoSettingsOutline } from "react-icons/io5";
import { AiFillAppstore } from "react-icons/ai";
import { BiPrinter } from "react-icons/bi";
export const SIderberNavLinks = [
    //groups
    {
        title: false,//group title 
        NavItems: [ //group links
            {
                link: '/',
                menu: 'Dashboard',
                access: 'Collapsed-menu',
                icon: MdOutlineDashboard,
                dropDown: false,
            },
            {
                link: false,
                menu: 'Expense',
                access: 'Collapsed-menu',
                icon: MdOutlineLocalMall,
                dropDown: [
                    {
                        link: '/categoryList',
                        menu: 'Categoty list',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/expenseList',
                        menu: 'Expense list',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/ExpenseReceipt',
                        menu: 'Expense Receipt',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/newExpenseReceipt',
                        menu: 'New Expense Receipt',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'Services',
                access: 'Collapsed-menu',
                icon: MdOutlineMedicalInformation ,
                dropDown: [
                    {
                        link: '/serviceList',
                        menu: 'service List',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                  
                ]
            },
            {
                link: false,
                menu: 'Reports',
                access: 'Collapsed-menu',
                icon: BiPrinter,
                dropDown: [
                    {
                        link: '/yearlyInvoiceList',
                        menu: 'Yearly Invoice',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/monthlyInvoice',
                        menu: 'Monthly Invoice',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                
                ]
            },
            {
                link: false,
                menu: 'Settings',
                access: 'Collapsed-menu',
                icon: IoSettingsOutline,
                dropDown: [
                    {
                        link: '/generalSetting',
                        menu: 'General Setting',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/role',
                        menu: 'Role',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    
                ]
            },
            {
                link: false,
                menu: 'Invoice Management',
                access: 'Collapsed-menu',
                icon: RiPagesLine ,
                dropDown: [
                    {
                        link: '/paidList',
                        menu: 'Invoice List',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/createInvoice',
                        menu: 'Create Invoice',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                  
                ]
            },   
            {
                link: false,
                menu: 'Profile',
                access: 'Collapsed-menu',
                icon: TbUserCheck ,
                dropDown: [
                    {
                        link: '/leadDetails',
                        menu: 'lead Profile',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                ]
            },   
            
        ]
    },
    {
        title: 'Componens',
        NavItems: [ {
            link: false,
            menu: 'Components',
            icon: RiHomeSmile2Line,
            dropDown: [
                {
                    link: '/formelement',
                    menu: 'From Elements',
                    icon: FaRegCircle,
                    access: 'Collapsed-menu',
                    subMenu: false
                },
                {
                    link: '/modal',
                    menu: 'Modal',
                    icon: FaRegCircle,
                    access: 'Content-Navbar',
                    subMenu: false
                },
                {
                    link: '/cards',
                    menu: 'Cards',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/dataTable',
                    menu: 'Data table',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },

            ]
        },]
    },
    {
        title: 'demos',
        NavItems: [
            {
                link: '/demo',
                menu: 'Demo',
                icon: AiFillAppstore,
                access: 'Email',
                dropDown: false
            },
            {
                link: false,
                menu: 'Demo dropdowns',
                icon: AiFillAppstore,
                dropDown: [
                    {
                        link: '/Demo dropdown',
                        menu: 'Demo dropdown',
                        icon: FaRegCircle,
                        access: 'Dashboard',
                        subMenu: false
                    },
                    {
                        link: '/Demo dropdown',
                        menu: 'Demo dropdown',
                        icon: FaRegCircle,
                        access: 'Dashboard',
                        subMenu: false
                    },
                    {
                        link: false,
                        menu: 'Demo submenus',
                        icon: FaRegCircle,
                        access: 'Dashboard',
                        subMenu: [
                            {
                                link: '/Dashboard',
                                menu: 'Demo submenu',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: '/btn',
                                menu: 'Demo submenu',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: '/Dashboard',
                                menu: 'Demo submenu',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: false,
                                menu: 'Demo submenu2',
                                icon: FaRegCircle,
                                subMenu2: [
                                    {
                                        link: '/Dashboard',
                                        menu: 'Demo submenu2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/btn',
                                        menu: 'Demo submenu2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/Dashboard',
                                        menu: 'Demo submenu2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/Dashboard',
                                        menu: 'Demo submenu2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]

    },
   
]
export const SIderberNavLinksbl = [
    //groups
    {
        title: false,//group title 
        NavItems: [ //group links
            {
                link: '/',
                menu: 'ড্যাশবোর্ড',
                access: 'Collapsed-menu',
                icon: MdOutlineDashboard,
                dropDown: false,
            },
            {
                link: false,
                menu: 'ব্যয়',
                access: 'Collapsed-menu',
                icon: MdOutlineLocalMall,
                dropDown: [
                    {
                        link: '/categoryList',
                        menu: 'বিভাগ তালিকা',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/expenseList',
                        menu: 'ব্যয় তালিকা',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/ExpenseReceipt',
                        menu: 'খরচের রসিদ',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'সেবা',
                access: 'Collapsed-menu',
                icon: MdOutlineMedicalInformation ,
                dropDown: [
                    {
                        link: '/serviceList',
                        menu: 'পরিষেবা তালিকা',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                  
                ]
            },
            {
                link: false,
                menu: 'রিপোর্ট',
                access: 'Collapsed-menu',
                icon: BiPrinter,
                dropDown: [
                    {
                        link: '/yearlyInvoiceList',
                        menu: 'বার্ষিক চালান',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                
                ]
            },
            {
                link: false,
                menu: 'সেটিংস',
                access: 'Collapsed-menu',
                icon: IoSettingsOutline,
                dropDown: [
                    {
                        link: '/generalSetting',
                        menu: 'সাধারণ সেটিংস',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/role',
                        menu: 'ভূমিকা',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    
                ]
            },
            {
                link: false,
                menu: 'চালান ব্যবস্থাপনা',
                access: 'Collapsed-menu',
                icon: RiPagesLine ,
                dropDown: [
                    {
                        link: '/paidList',
                        menu: 'চালান তালিকা',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/createInvoice',
                        menu: 'চালান তৈরি করুন',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                  
                ]
            },   
            {
                link: false,
                menu: 'প্রোফাইল',
                access: 'Collapsed-menu',
                icon: RiPagesLine ,
                dropDown: [
                    {
                        link: '/leadDetails',
                        menu: 'লিড প্রোফাইল',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                   
                  
                ]
            },   
            
        ]
    },
    {
        title: 'উপাদান',
        NavItems: [ {
            link: false,
            menu: 'উপাদান',
            icon: RiHomeSmile2Line,
            dropDown: [
                {
                    link: 'formelement',
                    menu: 'ফর্ম এলিমেন্ট',
                    icon: FaRegCircle,
                    access: 'Collapsed-menu',
                    subMenu: false
                },
                {
                    link: '/modal',
                    menu: 'মোডাল',
                    icon: FaRegCircle,
                    access: 'Content-Navbar',
                    subMenu: false
                },
                {
                    link: '/cards',
                    menu: 'কার্ড',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },

            ]
        },]
    },
    {
        title: 'ডেমো গুলো ',
        NavItems: [
            {
                link: '/demo',
                menu: 'ডেমো',
                icon: AiFillAppstore,
                access: 'Email',
                dropDown: false
            },
            {
                link: false,
                menu: 'ডেমো ড্রপডাউন',
                icon: AiFillAppstore,
                dropDown: [
                    {
                        link: '/Demo dropdown',
                        menu: 'ডেমো ড্রপডাউন',
                        icon: FaRegCircle,
                        access: 'Dashboard',
                        subMenu: false
                    },
                    {
                        link: '/Demo dropdown',
                        menu: 'ডেমো ড্রপডাউন',
                        icon: FaRegCircle,
                        access: 'Dashboard',
                        subMenu: false
                    },
                    {
                        link: false,
                        menu: 'ডেমো সাবমেনু',
                        icon: FaRegCircle,
                        access: 'Dashboard',
                        subMenu: [
                            {
                                link: '/Dashboard',
                                menu: 'ডেমো সাবমেনু',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: '/btn',
                                menu: 'ডেমো সাবমেনু',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: '/Dashboard',
                                menu: 'ডেমো সাবমেনু',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: false,
                                menu: 'ডেমো সাবমেনু2',
                                icon: FaRegCircle,
                                subMenu2: [
                                    {
                                        link: '/Dashboard',
                                        menu: 'ডেমো সাবমেনু2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/btn',
                                        menu: 'ডেমো সাবমেনু2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/Dashboard',
                                        menu: 'ডেমো সাবমেনু2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/Dashboard',
                                        menu: 'ডেমো সাবমেনু2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]

    },
   
]