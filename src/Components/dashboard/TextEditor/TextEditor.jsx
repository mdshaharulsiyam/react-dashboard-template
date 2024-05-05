import React, { useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ContextData } from '../../../Providers/ContextProviders/ContextProviders';

const TextEditor = ({ placeholder }) => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const { theme } = useContext(ContextData)
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];
    const [value, setValue] = useState(placeholder);
    console.log(value)
    return (
        <>
            <h3 className='my-4 capitalize'>my text Editor</h3>
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className={`border-none rounded-md ${(theme === 'dark' || darkModeQuery.matches) ? 'darkThemeActivate' : ''} rounded-md dark:bg-[#2F3349] bg-gray-100`}>
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules}
                    formats={formats}
                />
            </div>
        </>
    );
};
export default TextEditor