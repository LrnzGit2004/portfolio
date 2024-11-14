import React from 'react'

const Button = ({ children, className}) => {
  return (
    <button className={`bg-[#084843] text-white py-2 px-2 lg:px-6 rounded-lg hover:bg-[#1C6961] duration-200 flex gap-2 items-center w-auto ${className}`}>
      {children}
    </button>
  )
}

export default Button
