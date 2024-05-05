/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div>
            <Link to='/newExpenseReceipt'>
                <button className="btn btn-warning mt-52 w-[200px] mx-auto font-bold text-xl">NewExpenseReceipt</button>

            </Link>
            <Link to='/serviceList'>
                <button className="btn btn-warning mt-52 w-[200px] mx-auto font-bold text-xl">serviceList</button>

            </Link>
            <Link to='/yearlyInvoiceList'>
                <button className="btn btn-warning mt-52 w-[200px] mx-auto font-bold text-xl">yearlyInvoiceList</button>

            </Link>
            <Link to='/generalSetting'>
                <button className="btn btn-warning mt-52 w-[200px] mx-auto font-bold text-xl">generalSetting</button>
               
            </Link>
            <Link to='/provider'>
                <button className="btn btn-warning mt-52 w-[200px] mx-auto font-bold text-xl"> provider</button>
              
            </Link>

           
        </div>
    );
};

export default Button;