import React, { FC } from 'react'

interface InputProps {
    label?: string,
    required?: boolean,
    type?: string,
    handleEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string,
    placeholder?: string,
    value?: string | number
}

const TextField: FC<InputProps> = ({ label, required, type, name, placeholder, value, handleEvent }) => {
    const Required = () => (
        <span className='text-primary'>*</span>
    )
    return (
        <div>
            <label>
                {label || "Title *"} &nbsp;
                {required && Required()}
            </label>
            {/*  */}
            <input
                type={type || "text"}
                placeholder={placeholder || "Enter a Text"}
                name={name}
                value={value}
                className="w-full rounded-md border border-gray-400 pe-10 shadow-sm sm:text-sm p-3 relative"
                onChange={handleEvent}
            />
        </div>
    )
}

export default TextField