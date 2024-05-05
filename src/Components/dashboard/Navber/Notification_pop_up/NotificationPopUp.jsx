import { HiOutlineMailOpen } from 'react-icons/hi'
import avater from '../../../../assets/avator.jpg'
import { RxCross1 } from 'react-icons/rx'

const NotificationPopUp = ({ showNotificationPopUp }) => {
    const NotificationData = [
        {
            avater: avater,
            title: 'Congratulation Lettie 🎉',
            message: 'Won the monthly best seller gold badge ',
            time: '1h ago',
            status: 'unread',
        },
        {
            avater: avater,
            title: 'Congratulation Lettie 🎉',
            message: 'Won the monthly best seller gold badge ',
            time: '1h ago',
            status: 'unread',
        },
        {
            avater: avater,
            title: 'Congratulation Lettie 🎉',
            message: 'Won the monthly best seller gold badge ',
            time: '1h ago',
            status: 'unread',
        },
        {
            avater: avater,
            title: 'Congratulation Lettie 🎉',
            message: 'Won the monthly best seller gold badge Won the monthly best seller gold badge',
            time: '1h ago',
            status: 'read',
        },
    ]
    return (//${showNotificationPopUp ? "popup" : "hidden"}
        <div className={`absolute ${showNotificationPopUp ? "popup" : "hidden"} dark:border-none dark:text-gray-300 dark:bg-[#2F3249] shadow-lg rounded-lg border lg:right-20 md:right-16 right-[2%] z-20 sm:-top-12 -top-8  mt-10 bg-white max-h-[93vh] overflow-y-auto min-w-[96%] max-w-[96%] sm:max-w-[350px] sm:min-w-[350px]`}>
            <span className='flex justify-between items-center dark:text-gray-300 text-lg p-3 text-gray-600 font-semibold opacity-70'>
                Notification
                <button>
                    <HiOutlineMailOpen className='text-2xl' />
                </button>
            </span>
            <div id='NotificationPopUp' className=' text-gray-500 flex justify-start items-start flex-col  border-t max-h-[60vh] overflow-y-auto'>
                {NotificationData.map((item, index) =>
                    <div key={index} className='border-b w-full py-3 px-2 cursor-pointer notification relative hover:bg-slate-100 dark:hover:bg-slate-500'>
                        <div className='flex justify-start items-start gap-2 box-border px-2 w-full dark:text-gray-300'>
                            <img className='w-10 h-10 rounded-full' src={item?.avater} alt="" />
                            <div>
                                <h3 className='text-base font-medium mb-1'>{item?.title}</h3>
                                <p className='pr-9'>{item?.message}</p>
                                <span className='text-xs font-semibold text-gray-500 dark:text-gray-300 opacity-70'>{item?.time}</span>
                            </div>
                        </div>
                        {
                            item?.status === 'unread' && <span className='absolute h-2 w-2 rounded-full bg-blue-600 top-5 right-7  '></span>
                        }
                        <button className='absolute dark:text-gray-300 right-6 top-9  text-lg cursor-pointer hidden removeNotification'>
                            <RxCross1 />
                        </button>
                    </div>)}
            </div>
            <div className='p-2'>
                <button className='block text-center w-full py-2 dark:hover:bg-slate-500 rounded-md text-blue-600 hover:bg-slate-100 text-base'>
                    View all notifications
                </button>
            </div>
        </div>
    )
}

export default NotificationPopUp