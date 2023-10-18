import React from 'react'

const PrimaryButton = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div>
            <button className={`transition duration-300 rounded-lg w-full px-4 p-2 bg-blue-400 hover:bg-blue-600 hover:text-white ${className}`}>
                {text}
            </button>
        </div>
    )
}

export default PrimaryButton