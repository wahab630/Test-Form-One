"use client"
import React, { useState } from 'react'
import Link from 'next/link';
//style
import { BsSearch, } from 'react-icons/bs';
import {MdMenu,MdMenuOpen} from 'react-icons/md'

//component
import MenuItems from '../dependant/menu/_MenuItems';
import Searchbar from '../DataEntry/input/searchbar/Searchbar';
// theme
import Logo from './logo';

const Navbar = () => {
    const [toggleSearch, setToggleSearch] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const Humburger = !toggleMenu ? MdMenu : MdMenuOpen;

    const heroSection = () => (
        <div className="">
            <div className='md:px-12 mx-auto p-3'>
                <div className='flex justify-between items-center h-20'>
                    <Link href="/">
                        <Logo />
                    </Link>
                    <div className='hidden md:flex items-center space-x-8 uppercase relative'>
                        <MenuItems />
                        <BsSearch className='h-6 w-6 stroke-current cursor-pointer hover:text-blue-600 transition duration-300'
                            onClick={() => setToggleSearch(!toggleSearch)}
                        />
                        {toggleSearch &&
                            <div className='absolute right-10'>
                                <Searchbar />
                            </div>
                        }
                    </div>
                    {/*mobile*/}
                    <Humburger className='h-6 w-6 md:hidden active:text-orange-600 transition duration-300'
                        onClick={() => setToggleMenu(!toggleMenu)}
                    />
                    {/*--mobile*/}
                </div>
                {/*mobile*/}
                {toggleMenu && (
                    <div className='md:hidden'>
                        <div className='flex justify-center space-y-4'>
                            <div className='w-full flex flex-col items-center space-y-6 p-3 bg-white rounded-lg '>
                                <MenuItems />
                                <div className=''>
                                    <Searchbar />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/*--mobile*/}
            </div>
        </div>
    )
    return (
        <div>
            {heroSection()}
        </div>
    )
}

export default Navbar