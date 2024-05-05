import { MdOutlineCampaign } from "react-icons/md";
import { FaRegUser, FaUsersBetweenLines } from "react-icons/fa6";
import Piechart from '../../Components/dashboard/Piechart/Piechart'
import { IoBarChartSharp, IoStatsChartSharp } from "react-icons/io5";
import { BiPieChartAlt2 } from "react-icons/bi";
import BarCharts from "../../Components/dashboard/BarChart/BarCharts";
import LineCharts from "../../Components/dashboard/LineChart/LineChart";
const Notice = () => {
  return (
    <div className="dark:text-gray-300 text-gray-600 mt-[4px] w-full mx-auto p-4 px-0 rounded ">
      <div className="md:grid grid-cols-2 justify-center items-center gap-4">
        <div style={{ boxShadow: ' 0 1px 1px rgba(0, 0, 0, 0.1)' }} className="bg-white w-full h-full border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-[#DDDBFB] dark:bg-gray-500 ">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold text-lg  mt-[3px]">নোটিশ</h6>
          </span>
          <p className="p-4 text-justify">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div style={{ boxShadow: ' 0 1px 1px rgba(0, 0, 0, 0.1)' }} className="bg-white w-full h-full border dark:border-none rounded-md md:mt-0 mt-5 dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-[#DDDBFB] dark:bg-gray-500 ">
            <FaUsersBetweenLines className="text-2xl" />

            <h6 className="font-bold text-lg mt-[3px]">ব্যাবহারকারী</h6>
          </span>
          <div className="p-4 text-justify">
            <p className="mb-1 text-justify">এই সফটওয়্যারটি Tiayra Laser & Aesthetic Center এর জন্য প্রস্তুতকৃত।{" "}</p>
            <ul className=" flex flex-col gap-1">
              <li className="flex justify-between items-center ">
                <p className=" -mb-2">ইনভয়েস</p><p className="min-w-fit bg-[#DFF7E9] text-[#3ECD7E] font-bold text-xs py-[2px] px-1 rounded">Unlimited</p>
              </li>
              <li className="flex justify-between items-center ">
                <p className=" -mb-2">ইনভয়েস</p><p className="min-w-fit bg-[#DFF7E9] text-[#3ECD7E] font-bold text-xs py-[2px] px-1 rounded">Unlimited</p>
              </li>
              <li className="flex justify-between items-center ">
                <p className=" -mb-2">ইনভয়েস</p><p className="min-w-fit bg-[#FCE5E6] text-[#EC6364] font-bold text-xs py-[2px] px-1 rounded">limited</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:grid  md:grid-cols-4 grid-cols-2 justify-center items-center mt-4  gap-4">
        <div style={{ boxShadow: ' 0 1px 1px rgba(0, 0, 0, 0.1)' }} className="bg-white w-full h-full border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-[#DDDBFB] dark:bg-gray-500 ">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold text-lg mt-[3px] ">নোটিশ</h6>
          </span>
          <p className="p-4 text-justify">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div style={{ boxShadow: ' 0 1px 1px rgba(0, 0, 0, 0.1)' }} className="bg-white w-full h-full border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-[#DDDBFB] dark:bg-gray-500 ">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold text-lg mt-[3px] ">নোটিশ</h6>
          </span>
          <p className="p-4 text-justify">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div style={{ boxShadow: ' 0 1px 1px rgba(0, 0, 0, 0.1)' }} className="bg-white relative w-full h-full border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-[#DDDBFB] dark:bg-gray-500 ">
            <FaRegUser className="text-xl" />

            <h6 className="font-bold text-lg  mt-[3px]">Users</h6>
          </span>
          <p className="px-4 py-2 font-bold">total</p>
          <p className="px-4 py-2 font-bold text-xl">2</p>
          <button className="bg-blue-500 w-full py-2 rounded-b-md absolute bottom-0 left-0 hover:bg-blue-600 text-white font-medium">
            User list
          </button>
        </div>
        <div style={{ boxShadow: ' 0 1px 1px rgba(0, 0, 0, 0.1)' }} className="bg-white w-full h-full border dark:border-none rounded-md md:mt-0 dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-[#DDDBFB] dark:bg-gray-500 ">
            <FaUsersBetweenLines className="text-2xl" />

            <h6 className="font-bold text-lg mt-[3px]">ব্যাবহারকারী</h6>
          </span>
          <div className="p-4">
            এই সফটওয়্যারটি Tiayra Laser & Aesthetic Center এর জন্য প্রস্তুতকৃত।{" "}
            <br />
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between items-center -mb-3">
                <p className=" -mb-2">ইনভয়েস</p><p className="min-w-fit bg-[#DFF7E9] text-[#3ECD7E] font-bold text-xs py-[2px] px-1 rounded">Unlimited</p>
              </li>
              <li className="flex justify-between items-center -mb-3">
                <p className=" -mb-2">ইনভয়েস</p><p className="min-w-fit bg-[#DFF7E9] text-[#3ECD7E] font-bold text-xs py-[2px] px-1 rounded">Unlimited</p>
              </li>
              <li className="flex justify-between items-center -mb-3">
                <p className=" -mb-2">ইনভয়েস</p><p className="min-w-fit bg-[#FCE5E6] text-[#EC6364] font-bold text-xs py-[2px] px-1 rounded">limited</p>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 justify-center items-center gap-4 mt-4 ">
        <div style={{ boxShadow: ' 0 1px 1px rgba(0, 0, 0, 0.1)' }} className="w-full bg-white h-full relative border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-[#DDDBFB] dark:bg-gray-500 ">
            <IoStatsChartSharp className="text-xl" />

            <h6 className="font-bold text-lg  mt-[3px]">Line Charts</h6>
          </span>
          <LineCharts />
        </div>

        <div style={{ boxShadow: ' 0 1px 1px rgba(0, 0, 0, 0.1)' }} className="w-full bg-white h-full relative border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-[#DDDBFB] dark:bg-gray-500 ">
            <IoBarChartSharp className="text-xl" />

            <h6 className="font-bold text-lg  mt-[3px]">Earning Report</h6>
          </span>
          <div className="max-w-[320px] mx-auto">
            <BarCharts />
          </div>
        </div>
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full bg-white h-full relative border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-[#DDDBFB] dark:bg-gray-500 ">
            <BiPieChartAlt2 className="text-2xl" />

            <h6 className="font-bold text-lg  mt-[3px]">Reasons for delivery exceptions</h6>
          </span>
          <div className="max-w-[320px] mx-auto">
            <Piechart />
          </div>
        </div>

      </div>
      {/* <ReactDataTable/> */}
    </div>

  );
};

export default Notice;
