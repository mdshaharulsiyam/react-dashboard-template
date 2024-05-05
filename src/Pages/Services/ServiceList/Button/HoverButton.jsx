/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const HoverButton = (rowData) => {
    const [showButtons, setShowButtons] = useState(false);
    return (
        <div>
            <div onMouseEnter={() => setShowButtons(true)} onMouseLeave={() => setShowButtons(false)}>
                {rowData.category}
                {showButtons && (
                    <div>
                        <button className='text-lg font-bold text-blue-500'>Edit</button>
                        <span className='text-lg mx-1'>|</span>
                        <button className='text-lg font-bold text-yellow-400'>Inactive</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HoverButton;


