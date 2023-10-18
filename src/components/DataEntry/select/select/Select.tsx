"use client"
import React, { FC, useState, useEffect, useRef } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"

interface props {
    name?: string,
    required?: boolean
    formData?: FormData
}
const Select: FC<props> = ({ name, required }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const list = [
        "select 1",
        "select 2",
        "select 3",
        "select 4",
    ]
    const divRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {//Close only if clicking outside the "refrence" div
            setOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClick = (select: string) => {
        setValue(select);
        setOpen(false);
    }
    const Required = () => (
        <span className='text-primary'>*</span>
    )
    return (<>
            <div ref={divRef} className='relative max-w-full '>
                <div className='group'>
                    <label>
                        Select <span className='capitalize'>{name || "Value"} *</span>
                        &nbsp;
                        {required && Required()}
                    </label>
                    <div className={`p-1 w-full border border-gray-400 group-hover:border-primary group-hover:bg-dim_primary flex items-center justify-between cursor-pointer select-none text-text_primary rounded-sm`}
                        onClick={() => setOpen(!open)}
                    >
                        {value || "Choose a select item"}
                        <IoMdArrowDropdown />
                    </div>
                    {open &&
                        <ul className='absolute w-full z-50 bg-white shadow-lg border rounded-sm'
                        >
                            {list.map((item, index) => (
                                <li className='border border-gray-200 p-2 px-4 text-sm cursor-pointer hover:underline hover:bg-primary/10'
                                    key={index}
                                    onClick={() => handleClick(item)}
                                >
                                    <h4 className='font-bold text-text_primary'>
                                        {item}
                                    </h4>
                                </li>
                            ))}
                            <li className='border border-gray-200 p-2 px-4 text-sm cursor-pointer hover:underline hover:bg-primary/25'
                                onClick={() => handleClick("Select University name")}
                            >
                                <h4 className='font-bold text-primary'>
                                    no select
                                </h4>
                            </li>
                        </ul>
                    }
                </div>
            </div>
            </>
    )
}

export default Select