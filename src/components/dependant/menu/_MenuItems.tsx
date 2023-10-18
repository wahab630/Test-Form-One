//@ts-nocheck
import React from 'react'
import Menu from './Menu'

const _MenuItems = () => {
    return (
        <>
            <Menu title={"Home"} link={"/"} />
            <Menu title={"Services"} link={"/services"} />
            <Menu title={"Projects"} link={"/projects"} />
            <Menu title={"About"} link={"/about"} />
        </>
    )
}

export default _MenuItems