import React from 'react';

const BtnWithIcon = ({text, icon}) => {
    return (
        <button
            className="rounded-sm bg-blue-600 flex items-center gap-1 text-xl text-white px-4 py-[8px] font-medium hover:bg-blue-700 duration-500"
          >
            <div className="text-2xl">
            {icon}
            </div>
            {text}
          </button>
    );
};

export default BtnWithIcon;