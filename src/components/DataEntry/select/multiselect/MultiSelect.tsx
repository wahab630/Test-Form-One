"use client"
import React, { FC, useState, useEffect, useRef } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"
import { ImCross } from 'react-icons/im'

interface props {
    name?: string,
    required?: boolean,
    data?: string[],
    placeholder?:string
}

const MultiSelect: FC<props> = ({ placeholder, name, required, }) => {
    const [value,setValue]=useState<string[]>([])
//   const data:string[]=[];

    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const list = [
        "select 1",
        "select 2",
        "select 3",
        "select 4",
    ]
    //*--ref start
    const divRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    //ref end--*

    const handleClick = (select: string) => {
        if (!value.includes(select)) {
            setValue((prevValues) => [...prevValues, select]);
          }
    }
    // remove select
    const removeSelect = (select: string) => {
        const filter = value.filter((item, index) => {
            return select !== item
        })
        setValue(filter)
    }
    // searching to show
    const filteredList = list.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const Required = () => (
        <span className='text-primary'>*</span>
    )
    return (
        <div className='relative'  ref={divRef}>
            <div className='group'>
                <label>
                    Select <span className='capitalize'>
                        {name || "Options"}
                    </span>
                    &nbsp;
                    {required && Required()}
                </label>
                <div className={`p-1 w-full border border-gray-400 group-hover:border-blue-600 group-hover:bg-blue-200 flex items-center justify-between cursor-pointer select-none text-text_blue-600 rounded-sm`}
                    onClick={() => setOpen(!open)}
                >
                    {/* show on placeholder */}
                    {value.length > 0 ?
                        <div className='flex space-x-2'>
                            {value.map((item, index) =>
                                <p key={index}>
                                    {item}
                                    {index !== value.length - 1 && ','}
                                </p>)}
                        </div>
                        :
                        placeholder || "Default *all subjects*"
                    }
                    <IoMdArrowDropdown />
                </div>
                {/* toggle */}
                {open && 
                // add absolute class
                    <div className='bg-white shadow-lg border' >

                        <div className='flex flex-wrap'>
                            {value.map((item, index) => (
                                <div key={index} className='relative bg-gray-300 mt-2 mb-1 ms-2'>
                                    <span className='absolute -top-2 p-[2px] bg-blue-600 text-white hover:bg-red-600 '
                                        onClick={() => removeSelect(item)}
                                    >
                                        <ImCross size={10} />
                                    </span>
                                    <p className='p-2'>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <input
                            type='text'
                            className='p-2 w-full border-b border-gray-300 focus:border-blue-600 outline-none text-blue-600'
                            placeholder='Search...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ul className=' w-full z-50 bg-white shadow-lg border rounded-sm'>
                            {filteredList.map((item, index) => (
                                <li className=' border border-gray-200 p-2 px-4 text-sm cursor-pointer hover:underline hover:bg-blue-200'
                                    key={index}
                                    onClick={() => handleClick(item)}
                                >
                                    <h4 className='font-bold '>
                                        {item}
                                    </h4>
                                </li>
                            ))}

                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default MultiSelect