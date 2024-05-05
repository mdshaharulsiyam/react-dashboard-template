import ExpenseModal from './ExpenseModal';
import { FaAlignRight } from "react-icons/fa";

const NewExpenseReceipt = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row w-[96%] mx-auto md:w-[100%] gap-10 mb-20'>
                {/* Expanse receive list (1st part) */}
                <div className='border dark:border-gray-700 mt-7 w-full md:w-[76%] mx-auto rounded shadow-2xl pb-16 '>
                    <div className='flex flex-col md:flex-row justify-between px-5 pt-5 gap-2'>
                        <img className='mb-3 w-[90%] md:w-[50%] lg:w-[40%] h-[150px]' src="https://cashbaksho.com/backend/billing_invoice_logo.png" alt="" />
                        <div className='flex flex-col lg:items-end my-4 lg:my-0'>
                            <div className='mb-2'>
                                <span className="label-text text-lg mr-9 text-black dark:text-white">Date : </span>
                                <input type="date" placeholder="Type here" className="input input-bordered w-[220px] h-[40px] bg-[#f7f7f7] dark:bg-base-100 " />
                            </div>
                            <div>
                                <span className="label-text text-lg text-black dark:text-white">Receiver : </span>
                                <input type="text" placeholder="Receiver" className="input input-bordered w-[220px] h-[40px] bg-[#f7f7f7] dark:bg-base-100" />
                            </div>
                        </div>
                    </div>
                    <div className='border-y border-gray-300 dark:border-gray-700  pb-2 px-5'>
                        <h1 className='text-gray-700 text-xl mt-2 mb-2 dark:text-white'>Expanse Receipt List</h1>
                        <table className='w-full mb-4'>
                            <tr>
                                <td className='text-gray-700 border text-center font-extrabold text-lg bg-[#f7f7f7]  dark:bg-base-100 dark:text-white dark:border-none py-2'>SN</td>
                                <td className='text-gray-700 border text-center font-extrabold text-lg bg-[#f7f7f7] dark:bg-base-100 dark:text-white dark:border-none py-2'>Expense</td>
                                <td className='text-gray-700 border text-center font-extrabold text-lg bg-[#f7f7f7] dark:bg-base-100 dark:text-white dark:border-none py-2'>Details</td>
                                <td className='text-gray-700 border text-center font-extrabold text-lg bg-[#f7f7f7] dark:bg-base-100 dark:text-white dark:border-none py-2'>Amount</td>
                            </tr>
                        </table>
                    </div>
                    <div className='flex flex-col  md:flex-row justify-between mt-5 px-5 te'>
                        <h6 className=' w-[92%] md:w-[50%] lg:w-[50%] text-base lg:text-lg text-black dark:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo!</h6>
                        <div className='flex flex-col items-end gap-2'>
                            <div className='flex flex-row items-center justify-center'>
                                <span className="label-text md:text-base xl:text-lg text-black dark:text-white">Expense Qty :  </span>
                                <input type="number" placeholder="Expense Qty" className="input input-bordered  md:w-[50%] lg:w-[60%] h-[40px] bg-[#f7f7f7] dark:bg-base-100 " />
                            </div>
                            <div className='flex flex-row items-center justify-center'>
                                <span className="label-text md:text-base xl:text-lg text-black dark:text-white">Total Amount :  </span>
                                <input type="number" placeholder="Total Amount" className="input input-bordered md:w-[50%] lg:w-[60%] h-[40px] bg-[#f7f7f7] dark:bg-base-100" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Select expanse  (2nd part) w-[340px] */}
                <div className='w-[96%] md:w-[24%] m-2 md:m-0'>
                    <div className='border dark:border-none mt-7 mx-auto rounded'>
                        <h4 className='text-lg text-black dark:text-white pl-3 py-2 border font-bold bg-[#DDDBFB] dark:bg-base-100 dark:border-none '>
                            <strong className='flex items-center gap-2 justify-start'><FaAlignRight />Select Expense</strong>
                        </h4>
                        <hr className='p-0 m-0 dark:invisible' />
                        {/* Expense modal */}
                        <ExpenseModal></ExpenseModal>
                    </div>
                    {/* receipt notes */}
                    <div className='border-x dark:border-gray-900 mt-7 mx-auto rounded '>
                        <h4 className='text-lg text-black dark:text-white dark:bg-base-100 pl-3 py-2 font-bold bg-[#DDDBFB]'>
                            <strong className='flex items-center gap-2 justify-start'><FaAlignRight />Receipt Notes</strong>
                        </h4>
                        <hr className='p-0 m-0 dark:invisible' />
                        <div className='pl-3 py-2'>
                            <p className="label-text text-black dark:text-white text-base mr-7 pb-2">Notes<span className="text-red-500">(required)</span></p>
                            <textarea className="textarea textarea-bordered w-[95%] bg-white dark:bg-gray-600" placeholder="Bio"></textarea>
                        </div>
                        <hr className='p-0 m-0 dark:invisible' />
                        <div className="py-2 w-full text-center bg-[#f7f7f7] dark:border-none dark:bg-base-100 ">
                            <button className="bg-[#5cb85c] w-[90%] h-[40px] text-white text-xl dark:border-none">
                                Save Receipt
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NewExpenseReceipt;
